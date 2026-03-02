import { useContext } from 'react'
import { TripPlanContext } from '../context/TripPlanContext'

export function useTripData() {
  return useContext(TripPlanContext).tripData
}
