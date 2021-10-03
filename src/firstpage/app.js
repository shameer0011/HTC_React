import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Persons from './Persons/Persons';

import Person from './Person/Person';
import Accounts from './Accounts/Accounts';
import Counter from './Counter/Counter';
import Counter1 from './Counter/Counter1';
import SignOut from './SignOut/Signout';
import Count12 from './Counter/Count12';
import About from './About/About';

import Count from './Txtredux/Count';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Signup from  './Signup/Signup';
import Login from './Login/Login';
import Signin from './Login/Signin';
import Home  from './Home/Home';
import Hhome  from './Hhome/Hhmo' ;
import {connect} from 'react-redux'


  class App extends Component{



  render(){

    let routes =(
      <Switch>
          
          <Route path="/" exact component={Login}></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/signup" exact component={Signup}></Route>
         

      </Switch>
    );

    if (this.props.authState){
      routes = (
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/count" exact component={Count}></Route>
          <Route path="/person" exact component={Persons}></Route>
          <Route path="/Home1" exact component={Hhome} ></Route>
          <Route path="/count12" exact component={Count12}></Route>
          <Route path="/counter" exact component={Counter}></Route>
          <Route path="/count1" exact component={Counter1}></Route>
          <Route path="/logout" exact component={SignOut}></Route>
          <Route path="/person" exact component={Persons}></Route>
        </Switch>
      );
    }



  return (
    <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark navbar-dark bg-steel fixed-top">
            <a className="navbar-brand" href="/">JAV</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                {
                  this.props.authState ?
                  <React.Fragment>
                    <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Home1">Posts</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/counter">Counter</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/count">Count</Link></li>
                    <li className="nav-itm"><Link className="nav-link" to="/count12">Count12</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/logout">SignOut</Link></li>
                  </React.Fragment>
                  :
                  <React.Fragment>
                   <li className="nav-item"><Link className="nav-link" to="/">SignIN</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/signup">SignUP</Link></li>
                  </React.Fragment>
                }
              </ul>
            </div>
          </nav>
        </div>
        {routes}
    </BrowserRouter>
    
    
      );
    }
  }
  
  const mapStateTopProps=state=>{
    return{
        authState:state.Loginauth.logauth
    }
}

export default connect(mapStateTopProps)(App) ;



  // <div className="App">
    //   <div className="container">
    //   {/* <Login></Login> */}
    //   <Signin></Signin>
    //   </div>
    //   <div className="container">
    //     <Signup></Signup>
    //   </div>
    //   <div className="container">
    //     <Persons></Persons>
    //   </div>
    // <div className="container">
    //   <Counter1></Counter1>
    // </div>
    // </div>


//   <nav class="navbar navbar-expand-md bg-dark navbar-dark bg-steel fixed-top">
//   <div class="container">
//     <a class="navbar-brand mr-4" href="/">JAV</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
//       aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>      
//     </button>
//     <div class="collapse navbar-collapse" id="navbarToggle">
//       <div class="navbar-nav mr-auto">
//         <a class="nav-item nav-link" href="/">Signin</a>
//         <a class="nav-item nav-link" href="/signup">SignUp</a>
//       </div>
//        { /* Navbar Right Side  */ }
//       <div class="navbar-nav">
//       </div>
//     </div>
// </div>
// </nav> 
     




//   <nav class="navbar navbar-expand-md bg-dark navbar-dark bg-steel fixed-top">
//   <div class="container">
//       <a class="navbar-brand mr-4" href="{% url 'blog-home' %}">JAV</a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
//           aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarToggle">
//           <div class="navbar-nav mr-auto">
//               {% if user.is_authenticated %}
//               <a class="nav-item nav-link" href="">Home</a>
//               <a class="nav-item nav-link" href="{% url 'blog-about' %}">About</a>
//               <!-- <a class="nav-item nav-link" href="{% url 'Post-Create' %}">AddPosts</a> -->
//           </div>
//           <!-- Navbar Right Side -->
//           <div class="navbar-nav">
//               <a class="nav-item nav-link" href="{% url 'ProFile' %}">{{user.username}}</a>
//               <a class="nav-item nav-link" href="{% url 'logout' %}">SignOut</a>
//               {% else %}
//               <a class="nav-item nav-link" href="{% url 'login' %}">SignIN</a>
//               <a class="nav-item nav-link" href="{% url 'user-SignUp' %}">SignUP</a>
//               {% endif %}
//           </div>
//       </div>
//   </div>
// </nav>    


