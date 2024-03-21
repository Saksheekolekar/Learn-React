import React, { useCallback, useEffect, useRef, useState } from "react";



function Search() {
  const [Length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numAllowed, setNum] = useState(false)
  const [charAllowed, setChar] = useState(false)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let char = `.,/'!@#$%^&*()}{[]!/`

    if (numAllowed == true) {
      str += num;
    }
    if (charAllowed == true) {
      str += char;
    }
    for (let i = 0; i < Length; i++) {
      let ind = Math.floor(Math.random() * str.length)
      pass += str[ind]
    }
    setPassword(pass)
    console.log(pass);

  }, [Length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [Length, numAllowed, charAllowed, generatePassword])

  const copytoclipBoard=()=>{
    window.navigator.clipboard.writeText(password);
    alert("password Copied Successfully!!")
  }
  return (
    <div className=" rounded-2xl bg-slate-600 m-7 p-2 mx-auto  w-2/4 text-center ">
      <h1 className="text-center mb-4 text-red-500 font-bold text-2xl">Password Generator</h1>
      <div className="grid grid-row-1 mb-4 grid-cols-3">
        <input className= " text-black  border-b-black border-l-black border-t-black border-2 col-span-2 rounded-s  " type="text" value={ "  "+password} readOnly />
        <button className=" bg-blue-600   border-black  border-2 rounded-e" onClick={copytoclipBoard}>Copy</button>
      </div>
      <div className="grid mb-4 grid-row-3 lg:grid-rows-1 lg:grid-cols-3">
        <div >
          <input type="range" min={8} max={100}  onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="Length text-xl">length :   </label>
          <label className="text-lime-300 text-xl"> {Length}</label>
        </div>
        <div className="text-xl">
          <input type="checkbox" defaultChecked={false} onClick={() => { setNum((prev) => !prev) }} />
          <label >NumberAllowed</label>
        </div>
        <div className="text-xl">
          <input type="checkbox" defaultChecked={false} onClick={() => { setChar((prev) => !prev) }} />
          <label htmlFor="">CharAllowed</label>
        </div>
      </div>
    </div>
  );
}

export default Search;