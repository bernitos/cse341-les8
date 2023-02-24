// connect to mongodb
const { MongoClient, ObjectId } = require("mongodb");

// getting the data
async function main(req, res) {
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    await listContacts(client);
    await singleContact(client, req, res);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listContacts(client) {
  databasesList = await client.db("contacts");
  const contacts = await databasesList.collection("contacts").find().toArray();
  console.log(contacts);
}

async function singleContact(client, req, res){
  databasesList = await client.db('contacts');
  const single = await databasesList.collection("contacts").findOne({_id: new ObjectId(req.query.id)});
  res.send(single)
}

module.exports = main;

