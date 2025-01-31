import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto  pb-0 m-0 w-full  max-w-7xl">
            <aside className=" overflow-hidden bg-cover  bg-no-repeat text-black bg-[url('./img/cover.jpeg')]  rounded-lg sm:mx-16 sm:py-16">
                
                <div className=" sm:rounded-2xl text-center  font-mono inset-0  text-6xl sm:pt-10 h-full ">
                    
                    <h1 className=" text-4xl  pt-4 pb-4 backdrop-brightness-150   text-stone-950 drop-shadow-xl  ">hey!<br/>it's,</h1>
                    <h1 className='text-slate-950  backdrop-filter font-mono font-bold mb-0 pb-4 backdrop-brightness-150  '>Sakshi Kolekar !!</h1>
                    <h1 className=" text-4xl   backdrop-brightness-150  pb-6  text-black ">Welcome To ,My Portfolio Website!</h1>
                    {/* <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" /> */}
                </div>
            </aside>

            {/* <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div> */}

            {/* <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Sakshi kolekar!</h1> */}
        </div>
    );
}