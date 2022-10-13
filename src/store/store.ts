import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import citiesSlice from './slices/citiesSlice'
import currentWeatherSlice from './slices/currentWeatherSlice'
import detailWeatherSlice from './slices/detailWeatherSlice'
import filterWeatherSlice from './slices/filterWeatherSlice'


const rootReducer = combineReducers({
	current: currentWeatherSlice,
	detail: detailWeatherSlice,
	cities: citiesSlice,
	filter: filterWeatherSlice
})
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false
	})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch