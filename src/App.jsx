import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Awesome from './components/Awesome'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
         <section id="home"><Hero /></section> 
        <section className="mt-12"><Logos /></section>
        <section className="mt-12"><Services /></section>
        <section className="mt-12"><WhyChoose /></section>
        <section className="mt-12"><Awesome /></section>
         <section id="pricing" className="mt-12"><Pricing /></section> 
        <section id="contact" className="mt-12"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
