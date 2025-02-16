import React from 'react'
import HeaderBar from './HeaderBar'
import MyNavbar from './MyNavbar'
import HeroCarousel from './HeroCarousel'

export default function Landing() {
  return (
    <div>
        <div style={{position:"absolute",width:'100vw', zIndex:"1"}}>
        <HeaderBar/>
        <MyNavbar/>
        </div>
        <div style={{position:"relative"}}>
        <HeroCarousel/>
        </div>
    </div>
  )
}
