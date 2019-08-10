const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    handle: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'student'
    },
    coach: {
        type: String,
        default: null
    },
});
const User = mongoose.model('users', UserSchema);


// const UserType = new GraphQlObjectType({
//     name: 'User',
//     fields: {
//         id: { type: GraphQLID },
//         handle: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//         date: { type: GraphQLString }
//     }
// })


module.exports = User;