import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './Footer'


function App() {
  useEffect(() => {
    Aos.init();
  
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact/>
      </div>
      <Footer />

    </>
  )
}

export default App
