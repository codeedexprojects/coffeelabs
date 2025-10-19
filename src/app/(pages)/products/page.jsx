import Header from '@/components/Header'
import React from 'react'
import Features from './components/Features'
import CoffeeProductsPage from './components/ProductsList'
import Footer from '@/components/Footer'
import ValuesSection from '@/components/landing/components/Values'
import ReviewsSection from '@/components/landing/components/Reviews'
import ImageSection from '@/components/landing/components/Appstore'

function page() {
  return (
    <div className='mt-15'>
      <Header/>
      <Features/>
      <CoffeeProductsPage/>
      <ValuesSection/>
      <ReviewsSection/>
      <ImageSection/>
      <Footer/>
    </div>
  )
}

export default page
