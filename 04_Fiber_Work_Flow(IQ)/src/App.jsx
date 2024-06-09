import { useState } from 'react'
import './App.css'

function App() {
  //  const counter=15
 let [counter,set]= useState(0)

   function setCounter() {
     if(counter>=0 && counter<20)
     { //  counter=counter+1
    set(counter+1)
    set(counter=>counter+1)
    
   }
  else{
    alert("counter has limit of 0 to 20")
  }}
   
   function removeCount() {
    if(counter>0)
   { 
    // counter=counter-1
    set(counter-1)
    set(counter=>counter-1)
    set(counter=>counter-1)
    set(counter=>counter-1)
    set(counter=>counter-1)
  }
    else{
      alert("counter has limit of 0 to 20")
    }
   }
  return (
    <><h1 className='text-amber-300 font-bold  text-7xl m-3'>"sakshee kolekar"</h1>
    <h2 className='text-3xl m-5 border-2 border-t-fuchsia-700   border-b-orange-500 rounded-xl'>
      Counter Value : {counter}</h2>
    <button  className="bg-indigo-950 text-neutral-500 border-indigo-400 border-2 rounded-2xl p-5" onClick={setCounter}>
      Increase Counter
    </button >

    <br/>
    <button className="bg-indigo-950 text-neutral-500 border-indigo-400 border-2 rounded-2xl p-5" onClick={removeCount}>
      Decrease Counter
    </button>
    </>
  )
}

export default App
