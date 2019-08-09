const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');

const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB successfully.'))
    .catch(err => console.log(err));


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

// Routes
app.use('/api/users', require('./routes/api/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listing on port ${PORT}`));