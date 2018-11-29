const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://hari:test123@ds241530.mlab.com:41530/book-list');
mongoose.connection.once('open', () => {
  console.log('Connection to database');
});

app.use(
  '/graphql',
  graphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('Listen http://localhost:4000');
});
