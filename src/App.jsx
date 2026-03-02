import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TripPlanProvider } from './context/TripPlanContext'
import { useTripData } from './hooks/useTripData'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CherryBlossoms from './components/CherryBlossoms'
import Home from './pages/Home'
import CitySelect from './pages/CitySelect'
import CityDetail from './pages/CityDetail'
import Food from './pages/Food'
import MapPage from './pages/MapPage'
import Shopping from './pages/Shopping'
import TripBuilder from './pages/TripBuilder'
import Phrases from './pages/Phrases'

function AppShell() {
  const { TRIP_META } = useTripData()
  return (
    <>
      {TRIP_META.cherryBlossoms && <CherryBlossoms count={20} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<TripBuilder />} />
        <Route path="/plan" element={<TripBuilder />} />
        <Route path="/guide" element={<Home />} />
        <Route path="/cities" element={<CitySelect />} />
        <Route path="/cities/:city" element={<CityDetail />} />
        <Route path="/food" element={<Food />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/map" element={<MapPage />} />
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
