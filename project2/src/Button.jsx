import { useState } from "react";
import React from "react";

function  Button({name}) {
      
      
      function changecolour() 
      {
      document.querySelector("body").style.backgroundColor=name
      }

    return ( 
     <>
     <button className="m-2 border-zinc-400" onClick={changecolour} 
      style={{backgroundColor:name}}>
      {name}
     </button>
     </>
     );
}

export default Button ;