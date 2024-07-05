import React from 'react'
import AddScrap from '../../Components/Product/AddScrap'
import Navbar from '../../Components/header/Navbar'
import { Footer } from '../../Components/Footer/Footer'

const Scrap = () => {
  return (
    <div>
       <Navbar/>
        <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 bg-gray-200">
        <div className="w-full max-w-[80vw]  h-full max-md:max-w-full max-md:my-10 ">
        <AddScrap/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Scrap