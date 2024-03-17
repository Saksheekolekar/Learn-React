import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <div className=' bg-slate-500 grid grid-cols-3 rounded-3xl border-black border-2 sm:grid-rows-2  sm:grid-flow-col md:grid-rows-1 md:grid-flow-col'> 
        <Button name="Red"/>   
        <Button name="Blue"/>     
        <Button name="Green"/>   
        <Button name="Yellow"/>   
        <Button name="Black"/>  
        <Button name="Purple"/>
        <Button name="Pink"/> 
        <Button name="Brown"/>
        <Button name="Orange"/>
     </div>   
    </>
  )
}

export default App
