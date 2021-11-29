const user=require("./userMutation");
const snap=require("./snapMutation");
const mutation={
    ...user,
    ...snap
}
module.exports=mutation;