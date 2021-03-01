import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider} from "@chakra-ui/react";
import {Page} from  "./dataStructure/page";


let whichPage = Page.FirstPage;


//localStorage.clear();

if (!localStorage.getItem('email'))    
        localStorage.setItem('email', '');
    else if (localStorage.getItem('email') !== '') {
        whichPage = Page.DashBoard;
    }



ReactDOM.render(
  <>
  
  <ChakraProvider>
  <React.StrictMode>
    <App whichPage={whichPage}/>
  </React.StrictMode>
  </ChakraProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
