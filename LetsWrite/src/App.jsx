import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/config.js'

function App() {
  const [count, setCount] = useState(0)
  console.log(conf);
  return (
   <>
   <h1 className='text-2xl text-center font-serif m-4 bg-slate-600'>BlOG APP WITH APP WRITES
    </h1></>
  )
}

export default App
