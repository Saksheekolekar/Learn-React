import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/config.js'
import Card from './Components/Card/Card.jsx'
function App() {
  
  console.log(conf);
  return (
   <>
   <h1 className='text-2xl text-center font-serif m-4 bg-slate-600'>BlOG APP WITH APP WRITES
    </h1>
    <Card/>
    </>
  )
}

export default App
