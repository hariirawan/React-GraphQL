const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://shaun:1234@ds251747.mlab.com:51747/gql-ninja')
mongoose.connection.once('open', () => {
   console.log('Connection to database')
});

app.use('/graphql', graphQLHTTP({
   schema,
   graphiql: true
}))

app.listen(4000, () => {
   console.log("Listen http://localhost:4000");
})