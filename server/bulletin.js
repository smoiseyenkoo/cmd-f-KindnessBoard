import { MongoClient } from 'mongodb';

const database = 'boards';
const ttl = 30; // the number of seconds a post lasts on a board

async function connectToCluster() {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }
 
// returns true if a board with that name already exists or if there is an error
export async function boardExists(title) {
    let mongoClient;
    let boardExists = true;
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(collection => collection.name);
        boardExists = collectionNames.includes(title);

        if (boardExists) {
            console.log(`Collection ${title} already exists!`);
        } else {
            console.log(`Collection ${title} does not yet exist.`);
        }
    } finally {
        await mongoClient.close();
    }
    return boardExists;
}

// returns the location of a given board, an object with lon and lat
export async function getBoardLocation(title) {
    let mongoClient;
    let boardLocation = {};
    const checkBoard = await boardExists(title);
    if (!checkBoard) {
        return boardLocation;
    }
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        const collection = db.collection(title);
        boardLocation = await collection.findOne({ _id : "location"});

    } finally {
        await mongoClient.close();
    }
    return boardLocation;
}

// returns an array of all posts on the given board, or an empty array if none
export async function getAllBoardPosts(title) {
    let mongoClient;
    let posts = [];
    const checkBoard = await boardExists(title);
    if (!checkBoard) {
        return posts;
    }
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        const collection = db.collection(title);

        posts = await collection.find().toArray();

        console.log(`Retrieving all posts on the ${title} board: ${posts}`);
    } finally {
        await mongoClient.close();
    }
    return posts;
}

// returns an array of all boards (title, lat, lon)
export async function getAllBoards() {
    let mongoClient;
    let boards = [];
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        const collection = db.collection('all-boards');

        boards = await collection.find().toArray();

        console.log(`Retrieving all boards: ${boards}`);
    } finally {
        await mongoClient.close();
    }
    return boards;
}

// creates a board given a json object holding title, lat, and lon
// returns true on success, false if board already exists
export async function createBoard(board) {
    let mongoClient;
    const title = board.title;
    const checkBoard = await boardExists(title);
    if (checkBoard) {
        return false;
    }
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        // add board to board collection:
        const boards = db.collection('all-boards');
        await boards.insertOne(board);

        // add new board:
        const collection = db.collection(title);
        await collection.createIndex( { "createdAt": 1 }, { expireAfterSeconds: ttl } );

        console.log(`Created new board: ${title}`);
    } finally {
        await mongoClient.close();
    }
    return true;
}

// creates a post on a given board (title), where post is a json object
// returns true on success, false if board doesn't exist
export async function createPost(title, post) {
    const checkBoard = await boardExists(title);
    if (!checkBoard) {
        return false;
    }
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        const collection = db.collection(title);
        
        await collection.insertOne(post);

        console.log(`New post added to the ${title} board: ${post.title}`);
    } finally {
        await mongoClient.close();
    }
    return true;
}

