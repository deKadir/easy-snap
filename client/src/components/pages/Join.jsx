import React, {  useState } from 'react'
import { Mutation } from 'react-apollo';
import { CREATE_USER } from './../../queries/index';
import Error from './Error';

export default function Join() {
    const initialState={
        username:'',
        password:'',
        confirmPassword:''
    }
    const [joinState,setJoinState]=useState(initialState);
    
    const onChange=(e)=>{
       
        setJoinState({...joinState,[e.target.name]:e.target.value})
        
      
    }
    const onSubmit=(event,createUser)=>{
        event.preventDefault();
            createUser().then(data=>{
                setJoinState(initialState);
                localStorage.setItem('token',data.data.createUser.token);
            }).catch(e=>console.log(e.message)); 
    }
    const formValidate=()=>{
        const {username,password,confirmPassword}=joinState;
        const isInvalid=!username||!password ||password!=confirmPassword;
        return isInvalid
    }
    return (
       
             <div>
                 <Mutation mutation={CREATE_USER} variables={{username:joinState.username,password:joinState.password}}>
                    {(createUser,{loading,error})=>{
                            if(error){
                                return <Error message={error.message}/>
                            }
                            if(loading){
                                return <div>loading...</div>
                            }
                       
                       return <form onSubmit={e=>
                         onSubmit(e,createUser)
                         } class="user-form">
                         <label htmlFor="">
                             <input type="text" name="username" placeholder="username" value={joinState.username} onChange={onChange}/>
                         </label>
                         <label htmlFor="">
                             <input type="password" name="password" placeholder="password" value={joinState.password} onChange={onChange} />
                         </label>
                         <label htmlFor="">
                             <input type="password" name="confirmPassword" placeholder="confirm password" onChange={onChange} value={joinState.confirmPassword} />
                         </label>
                         <label htmlFor="">
                         <button disabled={loading || formValidate()}>Join</button>
                         </label>
                         </form>}
                    }
                 </Mutation>

           
        </div>
    )
}
