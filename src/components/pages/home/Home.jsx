import React from 'react'
import Navigation from '../../partials/Navigation'
import Banner from './banner/Banner'
import Types from './types/Types'
import Toppings from './toppings/Toppings'
import Benefits from './benefits/Benefits'

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Types />
      <Toppings />
      <Benefits />
    </>
  )
}

export default Home
