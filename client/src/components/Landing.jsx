import React from 'react'
import HeaderBar from './HeaderBar'
import MyNavbar from './MyNavbar'
import HeroCarousel from './HeroCarousel'
import Footer from './Footer'
import FeatureSection from './FeatureSection'
import HistorySection from './HistorySection'
import NewArrivalsSection from './NewArrivalsSection'
import CountdownSection from './CountdownSection'

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
        <NewArrivalsSection/>
        <CountdownSection/>
        <HistorySection/>
        <FeatureSection/>
        <Footer/>
    </div>
  )
}
