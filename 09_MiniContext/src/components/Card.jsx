
function Card({newobj}) {
    
let {name="card"}=newobj

let {discription="lets descibe"}=newobj
  
   
    return(
        <>                                   
        <div id="card" className=" m-6  snap-start ">
            <div  className="image">
                <img src="Desktop - 1.png"  alt=" img" 
                className=" w-full h-48 overflow-auto touch-pan-y 
                rounded-t-2xl  bg-white" />
            </div>
            <div className="text-wrap bg-blue-500 rounded-b-2xl">
                <h4 className="font-bold font- text-black">
                {name}
                </h4>
                <p className=" opacity-80 text-gray-900">
                   {discription}
                </p>
            </div>
        </div>
        </>
    )
} 
 export default Card