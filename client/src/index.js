import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import { BrowserRouter } from 'react-router-dom';

const client=new ApolloClient({
  uri:"http://localhost:4000/graphql",
  fetchOptions:{
    credentials:'include'
  },request:operation=>{
    operation.setContext({
      headers:{
        authorization:localStorage.getItem('token')
      }
    })
  }
})
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
      </BrowserRouter>
    
 ,
 
 document.getElementById('root')
);

