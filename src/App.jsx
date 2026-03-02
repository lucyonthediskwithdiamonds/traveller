import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { TripPlanProvider, useTripPlan } from './context/TripPlanContext'
import { useTripData } from './hooks/useTripData'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CherryBlossoms from './components/CherryBlossoms'
import Home from './pages/Home'
import CityDetail from './pages/CityDetail'
import Food from './pages/Food'
import Shopping from './pages/Shopping'
import TripBuilder from './pages/TripBuilder'
import Phrases from './pages/Phrases'

function RequiresPlan({ children }) {
  const { plan } = useTripPlan()
  if (!plan.built) return <Navigate to="/" replace />
  return children
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function AppShell() {
  const { TRIP_META } = useTripData()
  return (
    <>
      <ScrollToTop />
      {TRIP_META.cherryBlossoms && <CherryBlossoms count={20} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<TripBuilder />} />
        <Route path="/plan" element={<TripBuilder />} />
        <Route path="/guide" element={<RequiresPlan><Home /></RequiresPlan>} />
        <Route path="/cities/:city" element={<RequiresPlan><CityDetail /></RequiresPlan>} />
        <Route path="/food" element={<RequiresPlan><Food /></RequiresPlan>} />
        <Route path="/shopping" element={<RequiresPlan><Shopping /></RequiresPlan>} />
        <Route path="/phrases" element={<RequiresPlan><Phrases /></RequiresPlan>} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <TripPlanProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </TripPlanProvider>
  )
}
