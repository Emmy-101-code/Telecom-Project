import React from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/hero1.png'

export default function Hero(){
  return (
    <div className="hero-bg text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-amber-400 bg-white/5 max-w-max">
            <span className="text-yellow-300">⭐</span>
            <span className="font-medium">Welcome to the best telecom platform</span>
          </div>
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="mt-8 text-6xl font-serifhead leading-tight">EmmyPay!</motion.h1>
          <p className="mt-6 max-w-lg text-lg">We offer instant recharge of airtime, data bundles, cable TV subscriptions (DSTV, GOTV & STARTIMES), electricity bill payments, and Airtime to Cash.</p>
          <div className="mt-8 flex gap-4">
            <button className="emmy-btn bg-red-600">Register</button>
            <button className="emmy-btn bg-emerald-500">Login</button>
          </div>
        </div>
        <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.15}}>
          <img src={hero} alt="hero" className="w-full max-w-md mx-auto rounded-card shadow-2xl" />
        </motion.div>
      </div>
    </div>
  )
}


