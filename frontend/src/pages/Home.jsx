import React from 'react'
import logo from "../images/logo.png"

const Home = () => {
  return (
    <>

      <div className="bg-primary-bg text-primary-text">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className=" bg-secondary-bg p-8 rounded-lg shadow-lg text-center">
            <img style={{width:300,height:100,objectFit:"contain",margin:"0px auto"}} src={logo} alt="" />
            <h1 className="text-4xl font-bold mb-4">CodeWithMahdi + Vite</h1>
            <p className="text-secondary-text mb-6">Your startup code is running <span className=' text-highlight'>successfully</span></p>
            <a href="https://www.youtube.com/@mahdifarooqui" target="_blank" className="text-link underline">
              Go on CodeWithMahdi YouTube Channel to Learn and Start Your Coding Journey
            </a>
            <div className="mt-8">
              <button className="bg-button-bg text-button-text px-6 py-2 rounded hover:bg-accent">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home