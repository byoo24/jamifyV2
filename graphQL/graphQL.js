const { buildSchema } = require('graphql');
const User = require('../models/User');




const schema = buildSchema(`
    type User {
        _id: ID!
        handle: String!
        email: String!
        password: String!
        role: String
        coach: String
    }
    input UserInput {
        handle: String!
        email: String!
        password: String!
    }

    type userQuery {
        users: [User!]
    }

    type userMutation {
        createUser(userInput: UserInput): User
    }

    schema {
        query: userQuery
        mutation: userMutation
    }
`);






const rootValue = {
    users: () => {
        return User.find()
            .then(users => { return users; })
            .catch(err => { throw err; });
    },
    createUser: (args) => {
        const user = new User({
            handle: args.userInput.handle,
            email: args.userInput.email,
            password: args.userInput.password,
        });

        return user.save()
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    }
}


module.exports = { schema, rootValue };