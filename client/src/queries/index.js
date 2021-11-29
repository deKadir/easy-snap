import {gql} from "apollo-boost";

export const CREATE_USER=gql`
mutation($username:String! $password:String!){
    createUser(data:{
        username:$username,
        password:$password
    }){
        token
    }
}
`;

export const SIGNIN_USER=gql`
mutation($username:String! $password:String!){signIn(data:{username:$username,password:$password}){token}}
`;
export const GET_ACTIVE_USER=gql`
query{
    activeUser{
        username,
        snaps{
            text
        }
    }
}

`