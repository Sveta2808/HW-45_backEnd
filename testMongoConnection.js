const  MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

let users = [{ name: 'Bob', age: 34 }, { name: 'Alice', age: 21 }, { name: 'Tom', age: 45 }];

async function run() {

    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        console.log(`В коллекции users ${await collection.countDocuments()} документов`);

    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run();