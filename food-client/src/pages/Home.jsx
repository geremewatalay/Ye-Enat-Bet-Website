import React from 'react'
import Banner from '../components/Banner'
import Categories from './Categories'
import SpacialDishes from './SpacialDishes'
import Testimonials from './Testimonials'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpacialDishes/>
      <Testimonials/>
    </div>
  )
}

export default Home