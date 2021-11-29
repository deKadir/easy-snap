const express=require("express");
const mongoose=require("mongoose");
require('dotenv').config();
const {ApolloServer }=require("apollo-server-express");
const {importSchema}=require("graphql-import");
const User=require("./models/User");
const Snap=require("./models/Snap");
const resolvers=require("./graphql/resolvers/index");
const server=new ApolloServer({
    typeDefs:importSchema("./graphql/schema.graphql"),
    resolvers:resolvers,
    context:{
        User,
        Snap
    }

})
mongoose.connect(process.env.DB_URI).then(
    ()=>{console.log("database connection succeed")}
).catch((e)=>console.log(e));

const app=express();
server.applyMiddleware({app});
app.listen({port:4000},()=>{
    console.log("app started running on port 4000")
})