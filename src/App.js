import React from 'react';
import './App.css';
import  './index.css';
import Title from './components/Title';
import { IMG_CDN_URL } from './config';
import HeaderComponent from './components/Header';
function App() {
  return (
    <div className="App">
   
   <HeaderComponent/>
    </div>
  );
};

//React.Fragment is a component imported from react
// const styleObj = {
//   backgroundColor:"red"
// }


const Footer =() =>{
  return(
    <React.Fragment>
        <h4>Footer</h4>
        <h1>hii</h1>
    </React.Fragment>
  
  )
}


export default App;
