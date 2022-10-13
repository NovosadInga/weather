
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterType, IFilter } from '../../types/types'
export interface filterWeatherState {
	active: FilterType,
	values: IFilter[]
}
const initialState = {
	active: FilterType.TODAY,
	values: [
		{ value: "На бижчий час", key: FilterType.TODAY },
		{ value: "На завтра", key: FilterType.TOMOROW },
		{ value: "На тиждень", key: FilterType.WEEK }
	]

} as filterWeatherState

export const filterWeatherSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilterWeather(state, action: PayloadAction<FilterType>) {
			state.active = action.payload
		}
	},
})

export const { setFilterWeather } = filterWeatherSlice.actions
export default filterWeatherSlice.reducer