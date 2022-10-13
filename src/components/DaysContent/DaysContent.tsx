import { useCustomSelector } from '../../hooks/store';
import { selectDetailAll } from '../../store/selectors/detailWeatherSelector';
import DayCardList from '../DayCardList/DayCardList';

import s from './DaysContent.module.scss'


export const DaysContent = ({ ...props }) => {
	const { isLoading, error } = useCustomSelector(selectDetailAll);
	return (
		<div className={s.days_list} >
			<DayCardList isLoading={isLoading} error={error} />
		</div>
	);
}

