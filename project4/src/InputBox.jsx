import React from "react";

function InputBox() {
    return ( 
        <div className="bg-slate-500 p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label className="text-black/40  mb-2 inline-block">label</label>
                <input type="number" className="outline-none w-full bg-transparent py-1.5" placeholder="Amount" />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 bg-gray-100 cursor-pointerpy-1">
                <option value="usd">usd</option>
                </select>
               
            </div>
        </div>
     );
}

export default InputBox;