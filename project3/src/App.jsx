
import React from 'react'
import Search from './Search'

function App() {
  // const [length, setLength] = useState(8)
  // const [numAllowed, setNumber] = useState(false)
  // const [charAllowed, setChar] = useState(false)
  // const [password, setPassword] = useState("")

  // const passref = useRef(null)
  // const passwordGenerator = useCallback(() => {//this hook is call depends on dependencies
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if (numAllowed) str += "1234567890"
  //   if (charAllowed) str += "!@#$%^&*(){}[]"

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length)
  //     pass += str[char]


  //   }
  //   setPassword(pass)
  // }, [length, numAllowed, charAllowed, setPassword])


  // useEffect(() => {
  //   passwordGenerator()
  // }, [length, numAllowed, passwordGenerator, charAllowed])

  // const copymegtoclipBoard = useCallback(() => {
  //   passref.current?.select();

  //   window.navigator.clipboard.writeText(password)
  // }, [password])
  // return (
  //   <>
  //     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
  //       <h1 className='text-center text-white'>text Generator</h1>
  //       <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
  //         <input
  //           type="text"
  //           value={password}
  //           className='outline-nonepy-1 w-full px-3'
  //           placeholder='password'
  //           readOnly
  //           ref={passref} />
  //         <button className=' outline-none bg-blue-600  text-white px-3 py-0.5 shrink-0' onClick={copymegtoclipBoard}>
  //           copy
  //         </button>
  //       </div>
  //       <div className='flex text-sm gap-x-5'>
  //         <div className='flex items-center gap-x-1'>
  //           <input type="range" min={4} max={100}
  //             className='cursor-pointer'
  //             value={length}
  //             onChange={(e) => { setLength(e.target.value) }}
  //           />
  //           <label className='text-zinc-50' >Length:{length}</label>
  //         </div>
  //         <div className='flex items-center gap-x-1'>
  //           <input type="checkbox" defaultChecked={numAllowed} id="nuberInput"
  //             onChange={() => {
  //               setNumber((prev) => !prev)
  //             }} />
  //           <label htmlFor="number">allowNumber</label>
  //         </div>
  //         <div className='flex items-center gap-x-1'>
  //           <input type="checkbox" defaultChecked={charAllowed} id="nuberInput"
  //             onChange={() => {
  //               setChar((prev) => !prev)
  //             }} />
  //           <label htmlFor="cahr">charAllowed</label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
  return(
    <Search/>
  )
}

export default App
