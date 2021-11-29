
const tokenManager=require("../../../helpers/tokenManager");
const bcrypt=require("bcrypt");
module.exports={
    createUser:async(parent,{data:{username,password}},{User})=>{
        const user=await User.findOne({username});
        if(user){
            throw new Error('this user already exist');
        }
        const newUser=await new User({username,password}).save();
        var token=tokenManager.generateToken({username:username});
        return {token}; 
    },signIn:async(parent,{data:{username,password}},{User})=>{
        const user=await User.findOne({username});
        if(!user){
            throw new Error("User couldn't found");
        }
        else{
            const res=bcrypt.compareSync(password,user.password);
           if(res){
             var token=tokenManager.generateToken({username:username});
               return {token};
           }else{
               throw new Error("please check your password");
           }
        }
    }
}