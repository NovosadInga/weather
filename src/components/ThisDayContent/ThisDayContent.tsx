import cn from "classnames";
import { useCustomSelector } from "../../hooks/store";
import { WaetherSvgSelector } from "../../assets/icons/global/WaetherSvgSelector";
import { getCurrentTime } from "../../utils/getTime";
import { widthErrorApi } from "../../hoc/widthErrorApi";
import { selectActiveCity } from '../../store/selectors/citiesSelectors';
import { selectCurrentAll } from '../../store/selectors/currentWeatherSlelectors';

import s from "./ThisDayContext.module.scss";

const ThisDayContent = ({ ...props }) => {
	const { data } = useCustomSelector(selectCurrentAll);
	const active = useCustomSelector(selectActiveCity);
	const icon = data.weather[0].icon;
	const time = getCurrentTime(data.dt);
	return (
		<div className={s.content}>
			<div className={s.block_top}>
				<div className={s.temp}>{Math.round(data.temp)}°</div>
				<div className={s.day}>Сьогодні</div>
				<div className={s.icon}>
					<WaetherSvgSelector id={icon} />
				</div>
			</div>
			<div className={s.block_bottom}>
				<div className={cn(s.time, s.text)}>
					Час: <span>{time}</span>
				</div>
				<div className={cn(s.sity, s.text)}>
					Місто: <span>{active.label}</span>
				</div>
			</div>
		</div>
	);
}
export default widthErrorApi(ThisDayContent);
