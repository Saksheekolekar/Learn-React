import { useState } from "react";
import React from "react";

function  Button({name}) {
     
      
      function changecolour() 
      { 
      document.querySelector("body").style.backgroundColor=name
      }

    return ( 
     <>
     <button className="m-2  border-2 rounded-3xl border-zinc-800" onClick={changecolour} 
      style={{backgroundColor:name}}>
      {name}
     </button>
     </>
     );
}

export default Button ;