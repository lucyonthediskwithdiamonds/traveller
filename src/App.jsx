import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CherryBlossoms from './components/CherryBlossoms'
import Home from './pages/Home'
import CitySelect from './pages/CitySelect'
import CityDetail from './pages/CityDetail'
import Food from './pages/Food'
// import Itinerary from './pages/Itinerary'
import MapPage from './pages/MapPage'

export default function App() {
  return (
    <BrowserRouter>
      <CherryBlossoms count={20} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<CitySelect />} />
        <Route path="/cities/:city" element={<CityDetail />} />
        <Route path="/food" element={<Food />} />
        {/* <Route path="/itinerary" element={<Itinerary />} /> */}
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
