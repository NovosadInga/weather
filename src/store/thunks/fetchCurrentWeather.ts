import { WeatherService } from "../../services/WeatherService";
import { fetchCurrentWeatherData, fetchCurrentWeatherError, fetchCurrentWeatherSuccess } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			fetchCurrentWeatherData()
			const res = await WeatherService.getCurrentWeather(payload)
			if (res.status === 200) {
				dispatch(fetchCurrentWeatherSuccess(res))

			} else {
				dispatch(fetchCurrentWeatherError())
			}
		} catch (error) {
			console.log(error)
			dispatch(fetchCurrentWeatherError())
		}
	}