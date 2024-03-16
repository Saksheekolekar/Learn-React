import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <div className=' bg-slate-800  grid grid-cols-3 rounded-2xl border-black border-2 sm:grid-flow-col'> 
        <Button name="red"/>   
        <Button name="blue"/>     
        <Button name="green"/>   
        <Button name="yellow"/>   
        <Button name="black"/>  
        <Button name="purple"/>
        <Button name="pink"/> 
        <Button name="brown"/>
        <Button name="orange"/>
     </div>   
    </>
  )
}

export default App
