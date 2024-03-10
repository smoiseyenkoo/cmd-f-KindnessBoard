import { MongoClient } from 'mongodb';

export async function connectToCluster(uri) {
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
 
 // post = json file of all things
 export async function createPost(collection, post) {
    await collection.insertOne(post);
 }

export async function findAllPosts(collection) {
    return collection.find().toArray();
}

export async function executeBulletinOperations(board, post) {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('boards');
        const collection = db.collection(board);
        collection.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 30 } )

        await createPost(collection, post);

        console.log(await findAllPosts(collection));
    } finally {
        await mongoClient.close();
    }
 }

