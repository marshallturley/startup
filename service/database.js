const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);

const dbName = 'startup';
const db = client.db(dbName);

const userCollection = db.collection('users');
const dataCollection = db.collection('data');

(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log('Connected successfully to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
})();


function getUserByEmail(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  return userCollection.insertOne(user);
}

async function updateUser(user) {
  return userCollection.updateOne({ email: user.email }, { $set: user });
}


async function addData(data) {
  return dataCollection.insertOne(data);
}

function getData(query = {}, options = {}) {
  const cursor = dataCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUserByEmail,
  getUserByToken,
  addUser,
  updateUser,
  addData,
  getData,
};
