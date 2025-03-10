import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './App.css'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import { AnalyticsProvider } from './utils/Analytics'

export default function App() {
  return (
      <AnalyticsProvider>

<Router> 
      <div className='App'>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
      </div>
      
    </Router>
    </AnalyticsProvider>
     
  )
}

