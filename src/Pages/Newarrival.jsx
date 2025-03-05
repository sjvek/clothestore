import React from 'react'
import './newarrival.css'
import Navbar from '../Components/Navbar/Navbar'

const Newarrival = () => {
  return (
    <>
    <Navbar/>
      <div className='text-center  box1'>
        <h1> New Arrival!</h1>
      </div>

      <div className='box2 row' >
           <div className='col-4'>
   <h1> T-shirts </h1>
           </div>
           <div className='col-6'>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-yellow-background-with-3d-t-shirts-rendered-image_3711716.jpg" alt="" />
           </div>
      </div>
    </>
  )
}

export default Newarrival
