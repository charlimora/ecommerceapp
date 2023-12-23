import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div style={{ margin:0 }}>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home
