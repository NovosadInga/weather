
import cn from 'classnames'
import cloud from '../../assets/img/cloud.png'
import { useCustomSelector } from "../../hooks/store";
import ThisDayInfoContent from '../ThisDayInfoContent/ThisDayInfoContent';
import { selectCurrentAll } from '../../store/selectors/currentWeatherSlelectors';

import s from './ThisDayInfo.module.scss'

export const ThisDayInfo = ({ ...props }) => {
	const { isLoading, error } = useCustomSelector(selectCurrentAll);
	return (
		<div className={cn(s.dayInfo, 'card')}>
			<img className={s.bg} src={cloud} alt="Cloud" />
			<ThisDayInfoContent isLoading={isLoading} error={error} />
		</div>
	);
}

