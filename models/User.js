const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const {
//     GraphQLID,
//     GraphQLString,
//     GraphQLList,
//     GraphQLNonNull,
//     GraphQLObjectType,
//     GraphQLSchema
// } = require('graphql');

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
    date: {
        type: Date,
        default: Date.now
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