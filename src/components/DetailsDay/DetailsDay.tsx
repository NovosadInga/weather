import { WaetherSvgSelector } from '../../assets/icons/global/WaetherSvgSelector';
import { useCustomSelector } from '../../hooks/store';
import { selectActiveCity } from '../../store/selectors/citiesSelectors';
import { ListData } from '../../types/types';
import { DayInfo } from '../DayInfo/DayInfo';

import s from './DetailsDay.module.scss'

interface IDetailsDay {
	data: ListData
}
export const DetailsDay = ({ data }: IDetailsDay) => {
	const { time, date_week, humidity, pressure, temp, weather, wind_speed, feels_like } = data
	const active = useCustomSelector(selectActiveCity)
	return (
		<div className={s.details}>
			<div className={s.left}>
				<div className={s.temp_now}>{Math.round(temp)}°</div>
				<div className={s.day}>{date_week}</div>
				<div className={s.week}>{time}</div>
				<div className={s.icon}>
					<WaetherSvgSelector id={weather.icon} />
				</div>
				<div className={s.city}>Місто: {active.label}</div>
			</div>
			<div className={s.right}>
				<DayInfo
					temp={temp}
					feels_like={feels_like}
					pressure={pressure}
					humidity={humidity}
					wind_speed={wind_speed}
					classes="small"
				/>
			</div>
		</div>
	);
}
