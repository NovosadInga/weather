
import { FilterType, IDaily, IHourly, ListData } from "../types/types"
import { getCurrentTime, getDate } from "../utils/getTime"

export const getDataDays = (filter: FilterType, daily: IDaily[], hourly: IHourly[]): ListData[] | null => {
	if (!daily.length || !hourly.length) return null
	switch (filter) {
		case FilterType.WEEK:
			return daily.slice(0, 7).map(el => {
				const { dt, humidity, pressure, temp, weather, wind_speed, feels_like } = el
				const { dateWeek, dateDay } = getDate(dt)
				return {
					dt,
					time: dateDay,
					date_week: dateWeek,
					humidity,
					pressure,
					temp: temp.day,
					wind_speed,
					feels_like: feels_like.day,
					weather: weather[0]
				}
			})
		case FilterType.TODAY:
			return hourly.slice(1, 8).map(el => {
				const { dt, humidity, pressure, temp, weather, wind_speed, feels_like } = el
				const today = getDate(hourly[0].dt)
				const { dateNum } = getDate(dt)
				const time = getCurrentTime(dt)
				const day = dateNum === today.dateNum ? "Сьогодні" : "Завтра"
				return {
					dt,
					time: time,
					date_week: day,
					humidity,
					pressure,
					temp: temp,
					wind_speed,
					feels_like,
					weather: weather[0]
				}
			})
		case FilterType.TOMOROW:
			const today = getDate(hourly[0].dt)
			return hourly.filter((el) => {
				const { dateNum } = getDate(el.dt)
				return dateNum !== today.dateNum
			}).filter((el, i) => i % 4 === 0).slice(0, 7).map((el, i) => {
				const { dt, humidity, pressure, temp, weather, wind_speed, feels_like } = el
				let time = getCurrentTime(dt)
				if (i == 6) time = '24:00'
				return {
					dt,
					time: time,
					date_week: "Завтра",
					humidity,
					pressure,
					temp: temp,
					wind_speed,
					feels_like,
					weather: weather[0]
				}
			})
		default:
			return null
	}
}