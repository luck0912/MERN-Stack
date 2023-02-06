import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    const notFound = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "column",
        "height": "92vh",
        "fontFamily": "JetBrains Mono", 
        "backgroundImage": "linear-gradient(to right, red 0%, red 50%, white 50%,white 100% )"
      }
  return (
    <>
    <div style={notFound}>
    <h2 style={{fontSize:"150px", opacity:".2"}}>404 </h2>
    <h1 style={{opacity:".5"}}>We're sorry not found </h1>
    <h3><NavLink to='/' className='btn btn-dark rounded-pill'>Back to hompage</NavLink></h3>
    </div>
    </>
  )
}

export default Errorpage