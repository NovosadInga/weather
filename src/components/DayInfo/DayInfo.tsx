import { InfoDayItem } from "../ui/InfoDayItem/InfoDayItem";

export interface IDayInfo {
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	wind_speed: number;
	classes?: string
}
export interface IDayItem {
	icon_id: string;
	name: string;
	value: string;
}
export const DayInfo = ({
	temp,
	feels_like,
	pressure,
	humidity,
	wind_speed,
	classes
}: IDayInfo
) => {
	const items: IDayItem[] = [
		{ icon_id: "temp", name: "Температура", value: `${Math.round(temp)}° - відчувається як ${Math.round(feels_like)}°` },
		{ icon_id: "pressure", name: "Тиск", value: `${pressure} мм ртутного стовпчика` },
		{ icon_id: "humidity", name: "Вологість", value: `${humidity} %` },
		{ icon_id: "wind", name: "Вітер", value: `${wind_speed} m/s` }
	]
	return (
		<div>
			{items.map(el => (
				<InfoDayItem key={el.name} data={el} classes={classes} />
			))}
		</div>
	);
}
