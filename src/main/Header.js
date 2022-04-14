import React from 'react'
import image from "../assets/avatar.png"

const Header = () => {
  return (
    <div className='d-flex' style={{}}>
    <img src={image} alt="avatar" className="rounded-pill" width="50px" />
    <div className="">
        <h1>Kyle Stinar</h1>
    </div>
    </div>
  )
}

export default Header