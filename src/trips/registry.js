// Trip registry — all country data modules imported statically
// Add new countries here as they are created

import * as japanCore      from './japan/index'
import * as japanShop      from './japan/shopping'
import * as franceCore     from './france/index'
import * as franceShopping from './france/shopping'
import * as greeceCore     from './greece/index'
import * as italyCore      from './italy/index'
import * as italyShopping  from './italy/shopping'
import * as portugalCore   from './portugal/index'
import * as portugalShopping from './portugal/shopping'
import * as spainCore      from './spain/index'
import * as spainShopping  from './spain/shopping'
import * as thailandCore   from './thailand/index'
import * as turkeyCore    from './turkey/index'
import * as moroccoCore   from './morocco/index'
import * as usaCore       from './usa/index'

export const TRIP_REGISTRY = {
  japan:    { ...japanCore,    ...japanShop },
  france:   { ...franceCore,   ...franceShopping },
  greece:   { ...greeceCore },
  italy:    { ...italyCore,    ...italyShopping },
  portugal: { ...portugalCore, ...portugalShopping },
  spain:    { ...spainCore,    ...spainShopping },
  thailand: { ...thailandCore },
  turkey:   { ...turkeyCore },
  morocco:  { ...moroccoCore },
  usa:      { ...usaCore },
}

export const DEFAULT_TRIP_ID = 'japan'
