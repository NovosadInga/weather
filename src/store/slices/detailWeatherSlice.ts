import { AxiosResponse } from "axios";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDaily, IHourly } from '../../types/types'

interface detailWeatherState {
	daily: IDaily[];
	hourly: IHourly[];
	isLoading: boolean;
	error: boolean;
}
const initialState = {
	hourly: [],
	daily: [],
	isLoading: true,
	error: false
} as detailWeatherState

export const detailWeatherSlice = createSlice({
	name: 'daily',
	initialState,
	reducers: {
		fetchDetailWeatherData(state) {
			state.isLoading = true
		},
		fetchDetailWeatherSuccess(state, action: PayloadAction<AxiosResponse>) {
			state.isLoading = false
			state.daily = action.payload.data.daily
			state.hourly = action.payload.data.hourly
			state.error = false
		},
		fetchDetailWeatherError(state) {
			state.isLoading = false
			state.error = true
		},

	},
})

export const { fetchDetailWeatherData, fetchDetailWeatherSuccess, fetchDetailWeatherError } = detailWeatherSlice.actions
export default detailWeatherSlice.reducer