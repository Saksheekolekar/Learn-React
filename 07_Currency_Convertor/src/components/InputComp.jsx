import React, { useId } from "react";

function InputComp({ 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
        
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg  m-2 text-sm flex 
        ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 w-full mb-2 inline-block"
                    htmlFor={amountInputId}>
                    {label}
                </label><br />
                <input id={amountInputId}
                className="w-full"
                   type="number"
                   placeholder="Amount"
                   disabled={amountDisable}
                   value={amount}
                   onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
               />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full ">
                    Currency Type
                </p>
                <select className="rounded-lg  text-right px-1 py-1 w-full bg-gray-100 cursor-pointer outline-none"
                   value={selectCurrency}
                   onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                   disabled={currencyDisable}
               >
                   
                       {currencyOptions.map((currency) => (
                           <option key={currency} value={currency}>
                           {currency}
                           </option>
                       ))}
                 
                </select>

            </div>
        </div>
    );
}

export default InputComp;