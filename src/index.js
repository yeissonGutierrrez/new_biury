import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HowItWork from './pages/HowItWork/HowItWork';
import Login from './pages/Login/Login';

import Register from './pages/Register/Register'
import Perfil from './pages/Home/Perfil/Perfil';

import ScrollRestoration from 'react-scroll-restoration'
import QuizPage from './pages/QuizPage/QuizPage';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollRestoration/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/HowItWork' component={HowItWork}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/perfil' component={Perfil}/>
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/Quiz' component={QuizPage}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
