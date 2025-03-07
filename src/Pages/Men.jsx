import React from 'react'
import CategoryClothes from '../Components/category/CategoryClothes'
import Navbar from '../Components/Navbar/Navbar'
import Footer2 from '../Components/Footer2/Footer2'

const Men = () => {
  return (
    <div>
      <Navbar/>
      <div className=' vh-100 bg-bg-transparent'>        
        <CategoryClothes/>
      </div>
      <Footer2/>
    </div>
  )
}

export default Men
