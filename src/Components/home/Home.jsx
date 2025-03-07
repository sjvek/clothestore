import React from 'react'
import Navbar from '../Navbar/Navbar'
import Advertise from '../advertise/Advertise'
import CategoryClothes from '../category/CategoryClothes'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
       <Navbar/> 
       <Advertise/>
       <div className='my-5'>
          <CategoryClothes/>
       </div>
     
       <Footer/>
    
    </div>
  )
}

export default Home
