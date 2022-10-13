import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { cities } from '../../constants';


export interface City {
	value: string,
	label: string,
}
interface citiesState {
	options: City[];
	active: City;

}
const options = cities.map(city => (
	{
		value: `lat=${city.lat}&lon=${city.lon}`,
		label: city.city
	}
))
const initialState = {
	options,
	active: options[6]

} as citiesState

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setCurrentCity(state, action: PayloadAction<City>) {
			state.active = action.payload
		}

	},
})

export const { setCurrentCity } = citiesSlice.actions
export default citiesSlice.reducer