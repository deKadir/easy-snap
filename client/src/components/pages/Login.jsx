import { Mutation } from 'react-apollo';
import React,{useState} from 'react'
import { SIGNIN_USER } from '../../queries';
import Error from './Error';
import { useHistory } from 'react-router';

export default function Login() {
    let history=useHistory();
    const initialState={
        username:'',
        password:''
    }
    const [formState,setFormState]=useState(initialState);
    const onChange=(event)=>{
        setFormState({...formState,[event.target.name]:event.target.value})
    }
    const onSubmit=(event,signin)=>{
        event.preventDefault();
        signin().then(data=>{
            console.log(data);
            setFormState(initialState);
            localStorage.setItem('token',data.data.signIn.token)
            history.push("/");
            history.go();
        }).then(data=>console.log(data)).catch(error=>console.log(error));
    }
    return (
        <div>
            <Mutation mutation={SIGNIN_USER} variables={{username:formState.username,password:formState.password}}>
            {
                (signin,{loading,error})=>{
                    if(loading){
                        return <div>Loading...</div>
                    }
                    if(error){
                        return <Error message={error.message}/>
                    }
                    return   <form class="user-form" onSubmit={e=>onSubmit(e,signin)}>
                    <label htmlFor="">
                        <input type="text" placeholder="username" value={formState.username} name="username" onChange={onChange} />
                    </label>
                    <label htmlFor="">
                        <input type="password" placeholder="password" value={formState.password}  name="password" onChange={onChange}/>
                    </label>
                    <label htmlFor="">
                    <button disabled={!formState.username||!formState.password||loading}>Login</button>
                    </label>
                    </form>
                   
                }
            }
            </Mutation>
           
        </div>
    )
}
