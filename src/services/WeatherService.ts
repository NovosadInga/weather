import axios, { AxiosResponse } from "axios";
import { api } from "../constants";
import { ICurrent, IDaily, IHourly } from "../types/types";

export class WeatherService {
	static getCurrentWeather(city: string): Promise<AxiosResponse<ICurrent>> {
		return axios.get<ICurrent>(`${api.BASE_URL + city + api.CURRENT_URL}`)
	}
	static getDetailWeather(city: string): Promise<AxiosResponse<IDaily>> {
		return axios.get<IDaily>(`${api.BASE_URL + city + api.DETAIL_URL}`)
	}

}