function renderelement(obj,r){
    // const div=document.createElement(obj.element)
    // div.innerHTML=obj.plaintext
    // div.setAttribute("href",obj.prop.href)
    // r.appendChild(div)

    const div=document.createElement(obj.element)
    div.innerHTML=obj.plaintext
    for (const property in obj.prop) {//accesing property using for loop
    
        if(property==="plaintext")continue;
            div.setAttribute(property,obj.prop.property)
        // }
    }
    r.appendChild(div)
}

const reactdata={ //its is the jsx file gives output in this format
    element:"a"
    ,prop:{href:"http://localhost:5173/"
    },
    plaintext:"welcome to custome react"
}


const reactroot=document.querySelector("#root")// after calling  it is called inside the root element consider the following function then look at its execution
renderelement(reactdata,reactroot)