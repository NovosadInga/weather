export const getCurrentTime = (time: number) => {
	const date = new Date(time * 1000);
	return date.toLocaleTimeString().slice(0, -3)
}

export const getDate = (time: number) => {
	const date = new Date(time * 1000);
	const arr_date = date.toLocaleDateString('uk-UA', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }).split(', ')
	return {
		dateWeek: arr_date[0],
		dateDay: arr_date[1],
		dateNum: arr_date[1].slice(0, 2)
	}
}