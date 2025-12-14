import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import AppRoutes from './routes/AppRoutes'
import AdvanceSearch from './components/AdvanceSearch/AdvanceSearch'
import AdventureHomepage from './components/AdventureHome'
import Footer from './components/common/Footer'
import Team from './components/Team/Team';
import { BookingProvider } from './components/context/BookingContext';
import Navbar from './components/Navbar';





function App() {
 

  return (
    <>
    <BookingProvider>
   
     <AppRoutes/>
    
     <Footer/>
     </BookingProvider>

  
    
      
    </>
  )
}

export default App
