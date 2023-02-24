const routes = require('express').Router();
const contacts = require('../controllers/contacts');
console.log(contacts);
const single = contacts.single;
const all = contacts.all;
const newContact = contacts.newContact;
const updateContact = contacts.updateContact;
const deleteContact = contacts.deleteContact;
routes.get('/:id', single);

//get all
routes.get('/', all);

//create new
routes.post('/', newContact);

//update
routes.put('/:id', updateContact);

//delete
routes.delete('/:id', deleteContact);

module.exports = routes;
