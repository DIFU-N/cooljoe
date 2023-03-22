import React, {useEffect} from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Layout from "./hooks/Layout"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    AOS.init({
      duration: 100, // Animation duration in milliseconds
      once: false, // Only animate once
    });
  }, [])
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
