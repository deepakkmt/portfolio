import React from 'react'
import '../App.css'
import abc from '../assets/abc.jpeg'
function Home() {
  return (
    
    <div className='container '>
      <div className='row home-main'>
        

        <div className='col-12 col-md-4 home-second'>
            <img src={abc} alt="profile"  className='imgg'/>
        </div>
        <div className='col-12 col-md-8 home-first'>
         <h1 className='text-warning '>Hello !</h1>
          <h2 className='text-white'>I am <span className='text-amber-300'>Deepak kumawat</span></h2>
         <div className='home-para-container'>
          <p className='text-white home-para'>And I am a <span className='text-amber-300'> MERN stack developer</span></p>
         </div>

        </div>

      </div>
      
    </div>
  )
}

export default Home