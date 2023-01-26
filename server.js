// Description: This is the entry point of the application
//import express from "express";
const express = require("express");
//assign port
const port = 5000;
//import {graphqlHTTP} from "express-graphql";
const {graphqlHTTP} = require("express-graphql");
//import GraphQLSchema and GraphQLObjectType  from "graphql";
const {GraphQLSchema, GraphQLObjectType} = require("graphql");

//create schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({//query is the root query
        name: 'Hello World',//name of the query
        fields: () => ({//fields is the object that contains the data
            message: {//message is the field
                type: GraphQLString,//type of the field
                resolve: () => 'Hello World'//resolve is the function that returns the data
            }
        })
    })
})


//create express app
const app = express();

//create graphql endpoint
app.use('/graphql', graphqlHTTP(
    {
        graphiql: true,
    }
))

//listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
