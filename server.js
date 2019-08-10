const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema, rootValue } = require('./graphQL/graphQL');

const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');




mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MonogoDB successfully.'))
    .catch(err => console.log(err));


// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());


// Routes
app.use('/api/users', require('./routes/api/users'));




app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: process.env.NODE_ENV === 'development'
}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));