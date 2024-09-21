import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Hero from './Hero.jsx'
import About from './About.jsx'
import NFT from './NFT.jsx'
import How from './How.jsx'
import News from './News.jsx'
function App() {
  const [count, setCount] = useState(0)
   useEffect(() => 
  {AOS.init()
})
  return (
    <>
     <Hero />
     <About />
     <NFT />
     <How />
     <News />

    </>
  )
}

export default App
