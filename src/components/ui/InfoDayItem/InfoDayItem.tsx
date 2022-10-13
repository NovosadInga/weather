import { IndicatorSvgSelector } from '../../../assets/icons/global/IndicatorSvgSelector';
import cn from 'classnames'
import { IDayItem } from '../../DayInfo/DayInfo';

import s from './InfoDayItem.module.scss'

interface IInfoDayItem {
	data: IDayItem,
	classes?: string
}
export const InfoDayItem = ({ data, classes }: IInfoDayItem) => {
	const { name, value, icon_id } = data
	return (
		<div className={cn(s.dayItem, classes)}>
			<span className={s.icon}>
				<IndicatorSvgSelector id={icon_id} />
			</span>
			<span className={s.title}>{name}</span>
			<span className={s.text}>{value}</span>
		</div>
	);
}
