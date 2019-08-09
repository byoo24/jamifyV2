const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require ('graphql');

const mongoose = require('mongoose');
const Blog = require('./models/blog');


const app = express();

const schema = buildSchema(`
    type Blog {
        _id: ID!
        title: String!
        text: String!
        description: String!
        date: String
    }

    input BlogInput {
        title: String!
        text: String!
        description: String!
        date: String
    }

    type blogQuery {
        blogs: [Blog!]!
    }

    type blogMutation {
        createBlog(blogInput: BlogInput): Blog
    }

    schema {
        query: blogQuery
        mutation: blogMutation
    }
`)

const root = {
    blogs: () => {
        return Blog.find().then(blogs => {
            return blogs;
        }).catch(err => {
            throw err
        })
    },
    createBlog: (args) => {
        const blog = new Blog({
            title: args.blogInput.title,
            text: args.blogInput.text,
            description: args.blogInput.description,
            date: new Date()
        });
        return blog.save().then(result => {
            console.log(result)
            return result
        }).catch(err => {
            console.log(err);
            throw err
        })
    }
}

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Now browse to localhost:5000/graphql'));


// let schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);


// let root = { hello: () => 'Hello World!' };

// let app = express();
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
// }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));