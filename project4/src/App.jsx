import { useState } from 'react'
import './App.css'
import InputBox from './components/InputComp'
import useCurrencyInfo from './hook/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo =useCurrencyInfo(From)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(To)
    setTo(From) 
    setConvertedAmount(amount)
     
    setAmount(convertedAmount)
    
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[To])
  }


  return (
    <>
      <form  onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}>
        <div>
          <InputBox 
           label="From"
           amount={amount}
           currencyOptions={options}
           onCurrencyChange={(currency) => setFrom(currency)}
           selectCurrency={From}
           onAmountChange={(amount) => setAmount(amount)}
            />
          <button onClick={swap}  type="button" className='text-center text-white bg-blue-700 border-white rounded-md border-2 m-1 p-2 size-auto'> Swap</button>
         
          <InputBox   label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={To}
                            amountDisable

            />
        </div>
        <div>
          <button  type='submit' className='bg-red-600 text-center h-fit text-white border-white rounded-2xl p-2 border-2 mt-3 mb-0  '>
          Convert {From.toUpperCase()} to {To.toUpperCase()}
          </button>
        </div>
      </form>
    </>
  )
}

export default App