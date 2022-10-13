import { AxiosResponse } from "axios";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICurrent } from '../../types/types'

interface currentWeatherState {
	data: ICurrent;
	isLoading: boolean;
	error: boolean;
}
const initialState = {
	data: {},
	isLoading: true,
	error: false
} as currentWeatherState

export const currentWeatherSlice = createSlice({
	name: 'current',
	initialState,
	reducers: {
		fetchCurrentWeatherData(state) {
			state.isLoading = true
		},
		fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse>) {
			state.isLoading = false
			state.data = action.payload.data.current
			state.error = false
		},
		fetchCurrentWeatherError(state) {
			state.isLoading = false
			state.error = true
		},

	},
})

export const { fetchCurrentWeatherData, fetchCurrentWeatherSuccess, fetchCurrentWeatherError } = currentWeatherSlice.actions
export default currentWeatherSlice.reducer