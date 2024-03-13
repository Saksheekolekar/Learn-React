import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1.jsx'
/* 
function hello() {
  return(<h2>lets welcome to page!!</h2>)
}//this also works but remember than react has its rule so follow it..but at the end the jsx is the function

ReactDOM.createRoot(document.getElementById('root')).render(
 hello()//jsx uses a bundler like babble and etc .which do work to improve syntax and all also they work to conversiion process of jsx
) */
//=========================================now try to use our custom react function in react====
/* 
const reactdata={ //its custom react object so react dom is not able understand nameing convension 
  element:"a"
  ,prop:{href:"http://localhost:5173/"
  },
  plaintext:"welcome to custome react"
} */

//  const reactdata=(<h2> welcome to object in vit rreact!</h2>)//this will run

 const reactdata=React.createElement(
  "img",
  {
    alt:"this is img"
  }
 )

ReactDOM.createRoot(document.getElementById('root')).render(
<App1/>
) 