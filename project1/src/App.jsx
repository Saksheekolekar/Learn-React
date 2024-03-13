import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  const counter=15
 let [counter,set]= useState(0)

   function setCounter() {
    if(counter>=0 && counter<20)
    { counter=counter+1
    set(counter)
   }
  else{
    alert("counter has limit of 0 to 20")
  }}
   
   function removeCount() {
    if(counter>0)
   { counter=counter-1
    set(counter)}
    else{
      alert("counter has limit of 0 to 20")
    }
   }
  return (
    <><h1>"sakshee kolekar"</h1>
    <h2>Counter Value {counter}</h2>
    <button onClick={setCounter}>
      Increase Counter
    </button>
    <br/>
    <button onClick={removeCount}>
      Decrease Counter
    </button>
    </>
  )
}

export default App
