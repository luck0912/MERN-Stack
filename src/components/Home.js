import React from 'react'

const Home = () => {
  const css = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column",
    "height": "92vh",
    "fontFamily": "JetBrains Mono", 
    "backgroundImage": "linear-gradient(to right, #afeeee66 0%, #afeeee66 50%, white 50%,white 100% )"
  }
  return (
    <div style={css}>
        <p className='pt-5' style={{fontWeight:"700", color:"blue"}}>WELCOME</p>
        <h1 style={{fontWeight:"900"}}>We are the mern developer</h1>
    </div>
  )
}

export default Home