const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;
const schema = require('./schema/schema');

const app = express();

// Connect to Database

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, console.log(`Server running on port ${port}`));