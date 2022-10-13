const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall?"
const API_KEY = "&appid=6831f31d6a790cf4927bdbfa34c21424"
const API_UNITS = "&units=metric"
const API_LANG = "&lang=ua"
const API_CURRENT = "&exclude=minutely,hourly,daily,alerts"
const API_DETAIL = "&exclude=minutely,current,alerts"
const CURRENT_URL = API_LANG + API_UNITS + API_CURRENT + API_KEY
const DETAIL_URL = API_LANG + API_UNITS + API_DETAIL + API_KEY

export {
	BASE_URL,
	CURRENT_URL,
	DETAIL_URL
}