const { MongoClient, ObjectId } = require('mongodb');

console.log('controllers');

async function single(req, res, next) {
  const uri = process.env.MONGO_URI.replace('contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('contacts');
  const all = await dbo
    .collection('contacts')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((all) => {
      console.log(all);
      res.send(all);
      res.status(200).send();
      next();
    })
    .catch((e) => {
      console.log(e);
    });
}
async function all(req, res) {
  const uri = process.env.MONGO_URI.replace('contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('contents');
  const all = await dbo
    .collection('contacts')
    .find()
    .toArray()
    .then((all) => {
      console.log(all);
      res.status(200).send(all);
    })
    .catch((e) => {
      console.log(e);
    });
}
async function newContact(req, res) {
  const uri = process.env.MONGO_URI.replace('contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('contacts');
  const newContact = await dbo.collection('contacts');
  newContact.insertOne({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    favColor: req.body.favColor,
    bday: req.body.bday
  });
  res.status(201).send();
}

async function updateContact(req, res) {
  const uri = process.env.MONGO_URI.replace('contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('contacts');
  const updateContact = await dbo.collection('contacts');
  updateContact.updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        favColor: req.body.favColor,
        bday: req.body.bday
      }
    }
  );
  res.status(204).send();
}
async function deleteContact(req, res) {
  const uri = process.env.MONGO_URI.replace( 'contacts');
  const client = new MongoClient(uri);
  const dbo = client.db('contactss');
  const deleteContact = await dbo.collection('contacts');
  deleteContact.deleteOne({ _id: new ObjectId(req.params.id) });
res.status(200).send();
}
module.exports = { single, all, newContact, updateContact, deleteContact };
