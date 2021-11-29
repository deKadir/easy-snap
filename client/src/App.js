import "./index.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Join from "./components/pages/Join";
import { Route,Switch} from 'react-router-dom';
import SessionWrapper from "./components/SessionWrapper";
import {useState} from "react";
function App() {
  return (
    

			<div id="app">
				<div className="container">
        <SessionWrapper/>
        <Header/>
        <Switch>
         <Route exact={true} path="/" component={Home}/>
         <Route exact={true} path="/join" component={Join}/>
         <Route exact={true} path="/login" component={Login}/>
       </Switch>
      
       
      
  

       
				</div>
			</div>

  );
}

export default App;
