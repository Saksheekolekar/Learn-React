import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Saksheekolekar')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <><div className='bg-transparent rounded-xl m-4 bg-black text-white p-7'>
            <div className=' '>
                <img className=' rounded-full p-auto w-au m-auto grid grid-rows-2  border-cyan-600 border-2' src={data.avatar_url} alt="Git picture" width={300} />
            </div>
            <div className='text-center '>
                <h1 className='text-gray-950 text-5xl font-bold'>{data.name}</h1>
                <p className='text-xl'>{data.bio}</p>
                <br />
          
            </div>
        </div>
        </>
    )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/Saksheekolekar')
//     return response.json()
// }