import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import HomeClass from './HomeClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomeClass />
//  <div>
   //  <Home name={'React JS'} 
  //   age= {25}
   //  obj = {{depart:'AIML',college: 'MKCE'}}
   //  Arr={['Java','HTML','CSS','JS','ReactJS']}
   //  jsx={<h4> HAPPPY LEARNING</h4>}/>
 // </div>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
