//query resolver
const Query=require("./query/Query");
//mutation resolver
const Mutation=require("./mutation/index");
const Snap=require("./query/Snap");
const User=require("./query/User");
module.exports={
    Query,
    Snap,
    Mutation,
    User,
    }