// express and functions
const routes = require('express').Router();
const contacts = require('./contacts');
routes.use('/contacts', contacts);
const swagger = require('./swagger')
routes.use('/', swagger)
module.exports = routes;
