import { createContext, useContext, useState, useEffect } from 'react'
import { TRIP_REGISTRY, DEFAULT_TRIP_ID } from '../trips/registry'

const STORAGE_KEY = 'tripPlan'

const defaultPlan = {
  built: false,
  country: null,      // e.g. 'japan'
  cities: [],         // city ids e.g. ['tokyo', 'kyoto']
  interests: [],      // interest ids e.g. ['food', 'shopping']
}

export const TripPlanContext = createContext(null)

export function TripPlanProvider({ children }) {
  const [plan, setPlan] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : defaultPlan
    } catch {
      return defaultPlan
    }
  })

  const activeCountry = plan.country || DEFAULT_TRIP_ID
  const tripData = TRIP_REGISTRY[activeCountry] || TRIP_REGISTRY[DEFAULT_TRIP_ID]

  // Inject CSS custom properties when trip changes
  useEffect(() => {
    const { primary, gradient } = tripData.TRIP_META.theme
    const r = parseInt(primary.slice(1, 3), 16)
    const g = parseInt(primary.slice(3, 5), 16)
    const b = parseInt(primary.slice(5, 7), 16)
    const root = document.documentElement.style
    root.setProperty('--color-primary', primary)
    root.setProperty('--color-primary-rgb', `${r}, ${g}, ${b}`)
    root.setProperty('--gradient-bg', gradient)
  }, [tripData])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
  }, [plan])

  function savePlan(updates) {
    setPlan(prev => ({ ...prev, ...updates }))
  }

  function resetPlan() {
    setPlan(defaultPlan)
  }

  return (
    <TripPlanContext.Provider value={{ plan, savePlan, resetPlan, tripData }}>
      {children}
    </TripPlanContext.Provider>
  )
}

export function useTripPlan() {
  return useContext(TripPlanContext)
}
