import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HowItWork from './pages/HowItWork/HowItWork';

import Register from './pages/Register/Register'
import Perfil from './pages/Profile/Profile';

import ScrollRestoration from 'react-scroll-restoration'
import QuizPage from './pages/QuizPage/QuizPage';
import Sellers from './pages/Sellers/Sellers';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollRestoration/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/HowItWork' component={HowItWork}/>
        <Route exact path='/Perfil' component={Perfil}/>
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/Quiz' component={QuizPage}/>
        <Route exact path='/Sellers' component={Sellers}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
