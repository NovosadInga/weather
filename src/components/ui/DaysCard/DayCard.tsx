
import { WaetherSvgSelector } from '../../../assets/icons/global/WaetherSvgSelector';
import { WeatherTypes } from '../../../types/types';

import s from './DayCard.module.scss'

export interface IDay {
	id: number;
	time: string;
	date_week: string;
	icon_id: WeatherTypes;
	temp_day: number;
	info: string;
	openPopup: (value: number) => void
}
export const DayCard = ({
	id,
	time,
	date_week,
	icon_id,
	temp_day,
	info,
	openPopup
}: IDay) => {
	return (
		<div className={s.day} onClick={() => { openPopup(id) }}>
			<div className={s.title}>{date_week}</div>
			<div className={s.day_info}>{time}</div>
			<div className={s.icon}>
				<WaetherSvgSelector id={icon_id} />
			</div>
			<div className={s.temp_day}>{Math.round(temp_day)}°</div>
			<div className={s.info}>{info[0].toLocaleUpperCase() + info.slice(1)}</div>
		</div>
	);
}
