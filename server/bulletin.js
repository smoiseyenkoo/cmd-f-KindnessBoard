import { MongoClient } from 'mongodb';

const uri = process.env.DB_URI;
const database = 'boards';
const ttl = 30; // the number of seconds a post lasts on a board

export async function connectToCluster() {
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
        boardExists = db.getCollectionNames().includes(title);

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
// REQUIRES: the given board already exists!
export async function getBoardLocation(title) {
    let mongoClient;
    let boardLocation = {};
 
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

// creates a board given a json object holding title, lat, and lon
// returns true on success
export async function createBoard(board) {
    let mongoClient;
    const title = board.title;
    const location = { _id: "location", lat: board.lat, lon: board.lon };
 
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db(database);
        const collection = db.collection(title);
        await collection.createIndex( { "createdAt": 1 }, { expireAfterSeconds: ttl } );
        await collection.insertOne(location);

        console.log(`Created new board: ${title}`);
    } finally {
        await mongoClient.close();
    }
    return true;
}

// creates a post on a given board, where post is a json object
// returns true on success
export async function createPost(title, post) {
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

