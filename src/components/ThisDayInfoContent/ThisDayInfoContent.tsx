import { widthErrorApi } from '../../hoc/widthErrorApi';
import { useCustomSelector } from '../../hooks/store';
import { selectCurrentData } from '../../store/selectors/currentWeatherSlelectors';
import { DayInfo } from '../DayInfo/DayInfo';

const ThisDayInfoContent = () => {
	const data = useCustomSelector(selectCurrentData)
	return (
		<div>
			<DayInfo temp={Math.round(data.temp)} feels_like={Math.round(data.feels_like)} pressure={data.pressure} humidity={data.humidity} wind_speed={data.wind_speed} />
		</div>
	);
}
export default widthErrorApi(ThisDayInfoContent);
