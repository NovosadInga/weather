export const getLocalStorage = (key: string) => {
	const data = localStorage.getItem(key);
	if (data !== null) return JSON.parse(data)
	return null
}
export const setLocalStorage = (key: string, data: string) => {
	localStorage.setItem(key, JSON.stringify(data));
}