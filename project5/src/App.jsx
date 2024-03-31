import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
 <Header/>
 <Home/>
 <Footer/>
  </>
  )
}

export default App
