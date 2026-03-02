// Trip registry — all country data modules imported statically
// Add new countries here as they are created

import * as japanCore from './japan/index'
import * as japanShop from './japan/shopping'

export const TRIP_REGISTRY = {
  japan: { ...japanCore, ...japanShop },
}

export const DEFAULT_TRIP_ID = 'japan'
