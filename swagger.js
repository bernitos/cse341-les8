const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'Personal Assignment',
    description: 'Personal assignment week 8.'
  },
  host: 'localhost:8080',
  schemes: ['http']
};
const output = './swagger.json';
const endpoints = ['./routes/index.js'];
swaggerAutogen(output, endpoints, doc).then(async () => {
await import('./server.js');
});
