const express = require('express');

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
app.get('/', (req, res) => {
    res.send('root');
});
app.use('/api/users', require('./routes/api/users'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));