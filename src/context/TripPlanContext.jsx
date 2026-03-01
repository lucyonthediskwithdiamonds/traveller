import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'tripPlan'

const defaultPlan = {
  built: false,
  country: null,      // e.g. 'japan'
  cities: [],         // city ids e.g. ['tokyo', 'kyoto']
  interests: [],      // interest ids e.g. ['food', 'knives']
}

const TripPlanContext = createContext(null)

export function TripPlanProvider({ children }) {
  const [plan, setPlan] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : defaultPlan
    } catch {
      return defaultPlan
    }
  })

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
    <TripPlanContext.Provider value={{ plan, savePlan, resetPlan }}>
      {children}
    </TripPlanContext.Provider>
  )
}

export function useTripPlan() {
  return useContext(TripPlanContext)
}
