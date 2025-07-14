import React from 'react'
import Navigation from '../../partials/Navigation'
import Banner from './banner/Banner'
import Types from './types/Types'
import Toppings from './toppings/Toppings'
import Benefits from './benefits/Benefits'
import Footer from '../../partials/Footer'

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Types />
      <Toppings />
      <Benefits />
      <Footer />
    </>
  )
}

export default Home
