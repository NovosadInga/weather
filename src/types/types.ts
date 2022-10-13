export enum WeatherTypes {
	CLEAR_SKY_DAY = '01d',
	CLEAR_SKY_NIGHT = '01n',
	FEW_CLOUDS_DAY = '02d',
	FEW_CLOUDS_NIGHT = '02n',
	SCATTERED_CLOUDS_DAY = '03d',
	SCATTERED_CLOUDS_NIGHT = '03n',
	BROKEN_CLOUDS_DAY = '04d',
	BROKEN_CLOUDS_NIGHT = '04n',
	SHOWER_RAIN_DAY = '09d',
	SHOWER_RAIN_NIGHT = '09n',
	RAIN_DAY = '10d',
	RAIN_NIGHT = '10n',
	THUNDERSTORM_RAIN_DAY = '11d',
	THUNDERSTORM_RAIN_NIGHT = '11n',
	SHOW_DAY = '13d',
	SHOW_NIGH = '13n',
	MIST_DAY = '50d',
	MIST_NIGH = '50n',
}

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}
export interface IIcon {
	main: string,
	icon: WeatherTypes,
	description: string,
}
interface ITemp {
	day: number;
	eve: number;
	max: number;
	min: number;
	morn: number;
	night: number;
}
export interface ICurrent {
	dt: number;
	feels_like: number;
	humidity: number;
	pressure: number;
	temp: number;
	wind_speed: number;
	weather: IIcon[]
}
export interface IDaily {
	dt: number;
	humidity: number;
	pressure: number;
	temp: ITemp;
	weather: IIcon[];
	wind_speed: number;
	feels_like: { day: number }
}
export interface IHourly {
	dt: number;
	humidity: number;
	pressure: number;
	temp: number;
	weather: IIcon[];
	wind_speed: number;
	feels_like: number
}
export interface IDetail {
	daily: IDaily,
	hourly: IHourly
}
export enum FilterType {
	TODAY = "today",
	TOMOROW = "tomorrow",
	WEEK = "week"
}
export interface IFilter {
	value: string;
	key: FilterType;
}
export interface ListData {
	dt: number;
	time: string;
	date_week: string;
	humidity: number;
	pressure: number;
	temp: number;
	weather: IIcon;
	wind_speed: number;
	feels_like: number;
}
