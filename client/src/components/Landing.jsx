import React from 'react'
import HeaderBar from './HeaderBar'
import MyNavbar from './MyNavbar'
import HeroCarousel from './HeroCarousel'

export default function Landing() {
  return (
    <div style={{height:"100vh", backgroundColor:"rgb(240, 235, 223)"}}>
        <HeaderBar/>
        <MyNavbar/>
        <HeroCarousel/>
    </div>
  )
}
