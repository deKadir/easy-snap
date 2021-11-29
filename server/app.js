const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
require('dotenv').config();
const {ApolloServer }=require("apollo-server-express");
const {importSchema}=require("graphql-import");
const User=require("./models/User");
const Snap=require("./models/Snap");
const resolvers=require("./graphql/resolvers/index");
const server=new ApolloServer({
    typeDefs:importSchema("./graphql/schema.graphql"),
    resolvers:resolvers,
    context:({req})=>({
        User,
        Snap,
        activeUser:req.activeUser
    })

})
mongoose.connect(process.env.DB_URI).then(
    ()=>{console.log("database connection succeed")}
).catch((e)=>console.log(e));

const app=express();
app.use(async(req,res,next)=>{
    const token=req.headers['authorization'];
    if(token&&token!=="null"){
        console.log(token);
        try{
            const activeUser=await jwt.verify(token,process.env.JWT_SECRET);
            req.activeUser=activeUser;
        }catch(error){
            console.log(error.message)
        }
    }
    
    next();
})
server.applyMiddleware({app});
app.listen({port:4000},()=>{
    console.log("app started running on port 4000")
})