import { FaWater } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import React from 'react'

export default function App() {

   // const [weather, setWeather] = useState(null);
   
   // const  FetchData = async() =>{
   //    try {
   //      const response = await fetch()

   //    } catch (error) {
   //       console.log(error);
         
   //    }
   // }

  return (
    <div className='flex justify-center items-center mt-5'>
       <div className='bg-gradient-to-tr from-cyan-600  via-cyan-400 to-blue-400 w-[39rem]   h-[34rem] shadow-lg shadow-slate-700 rounded-lg '>
           <h1 className='text-2xl font-serif font-semibold text-center mt-9 text-white'>Weather App</h1>
          <div className='flex justify-center gap-3 mt-[2rem] items-center'>
          <div className='bg-white w-[18rem] rounded-lg border-2 border-blue-900 h-[7vh]  top-[4rem] left-[8rem]  '>
               <input type="Search" placeholder='Search any location here' className='w-[16rem] h-[5vh] rounded-lg border-none mt-1 outline-none pl-2 text-center'/>
            </div>
          <div>
          <button className=' rounded-md text-white py-2 px-8 bg-black'>Search</button>
          </div>
          </div>
          <div className=' flex justify-center  mt-2'>
           <div className="flex-col">
           <img src="https://static.vecteezy.com/system/resources/thumbnails/035/264/739/small_2x/cloudy-weather-icon-3d-neture-blue-design-for-element-free-png.png" alt=""  className='w-[13rem] h-[13rem]'/>
           <h1 className="text-center  text-white text-3xl font-serif font-semibold">location</h1>
           </div>
       </div>
        <div className=" flex justify-between mt-8">
           <div className="ml-8 flex justify-center gap-3 items-center">
           <FaWind className="text-white text-2xl" />
           <div>
            <h1 className="text-white text-2xl mt-3">18 km/h </h1>
            <p className="text-white">wind  speed</p>
           </div>
           </div>
           <div className="mr-8 flex justify-center gap-3 items-center">
           <FaWater  className="text-white text-2xl" />
           <div>
            <h1 className="text-white text-2xl mt-3">54% </h1>
            <p className="text-white">Humidity</p>
           </div>
           </div>
        </div>
      </div>
   </div>
  )
}
