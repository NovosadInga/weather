import { WeatherService } from "../../services/WeatherService";
import { fetchDetailWeatherData, fetchDetailWeatherError, fetchDetailWeatherSuccess } from "../slices/detailWeatherSlice";
import { AppDispatch } from "../store";

export const fetchDetailWeather =
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			fetchDetailWeatherData()
			const res = await WeatherService.getDetailWeather(payload)
			if (res.status === 200) {
				dispatch(fetchDetailWeatherSuccess(res))

			} else {
				dispatch(fetchDetailWeatherError())
			}
		} catch (error) {
			console.log(error)
			dispatch(fetchDetailWeatherError())
		}
	}