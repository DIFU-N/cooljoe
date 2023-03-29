import React, {useEffect} from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import HowItWorks from './pages/How-It-Works/HowItWorks';
import Layout from "./components/Layout"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      // AOS library initialization code here
      AOS.init({
        duration: 400, // Animation duration in milliseconds
        once: false, // Only animate once
      });
    }
  }, [])
  return (
    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&family=Yantramanav&family=Six+Caps&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      </style>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
