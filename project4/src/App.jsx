
import { useState } from 'react'
import InputBox from './components/InputBox'
import currencyConvertor from './hook/currencyConverter'



function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = currencyConvertor(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import InputBox from './components/InputBox'
// import currencyConvertor from './hook/currencyConverter'

// function App() {
//   const [amount, setAmount] = useState(0)
//   const [resultAmount,setConvertAmount] = useState(0)
//   const[To,setTo]=useState("inr")
//   const[From,setFrom]=useState("usd")
 

//   const data=currencyConvertor(From)
//   const  options=Object.keys(data)

//    function swap() {
//     setFrom(To)
//     setTo(From)
//     setConvertAmount(amount)
//     setAmount(resultAmount)
//    }
//    const convert=setConvertAmount(amount*data[To])
//   return (
//     <>
//     <form onSubmit={(e)=>{
//       e.preventDefault()
//     }}>
//       <div>
//        <InputBox label="From"
//           amount={amount}
//           selectCurrency={From}
//           currencyOptions={options}
//           onCurrencyChaged={(currency)=>setAmount(amount)}
//           onAmountChanged={(amount)=>setAmount(amount)}
//           className=""/>
//        <button  onClick={swap} className='text-center text-white bg-blue-700 border-white rounded-md border-2 m-1 p-2 size-auto'> Swap</button>
//        <InputBox label="To"
//           amount={resultAmount}
//           selectCurrency={From}
//           currencyOptions={options}
//           onCurrencyChaged={(Currency)=>(setAmount(amount))}
//           className=""/>
//       </div>
//       <div>
//         <button className='bg-red-600 text-center h-fit text-white border-white rounded-2xl p-2 border-2 mt-3 mb-0  '>
//            Click Here to Convert Amount
//           </button>
//       </div>
//     </form>
//     </>
//   )
// }

// export default App
