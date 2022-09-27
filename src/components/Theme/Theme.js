import React, { useEffect, useState } from 'react'
import './theme.css'



function Theme() {
  
    const [dark, setDark] = useState(true)
    useEffect(() => {
      if (dark){
        document.documentElement.style.setProperty('background' , '#022c43')
        document.documentElement.style.setProperty('color' , '#444')
        document.documentElement.style.setProperty('--h1_color' , '#fff')
        document.documentElement.style.setProperty('--cube' , '#grey')
      }else {
        document.documentElement.style.setProperty('background' , '#fff')
        document.documentElement.style.setProperty('color' , '#111')
        document.documentElement.style.setProperty('--h1_color' , '#111')
        document.documentElement.style.setProperty('--cube' , '#000')
      }
    }, [dark])
    

  return (
    <div id='theme'>
        {
            dark
            ? <i id='sun' className="fa-solid fa-sun" onClick={() => setDark(false) }></i>
            : <i id='moon' className="fa-solid fa-moon"onClick={() => setDark(true) }></i>
        }
    </div>
  )
}

export default Theme