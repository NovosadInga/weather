import { useState } from 'react';
import { widthErrorApi } from '../../hoc/widthErrorApi';
import { useInfo } from '../../hooks/useInfo';
import { DetailsDay } from '../DetailsDay/DetailsDay';
import { DayCard } from '../ui/DaysCard/DayCard';
import { Popup } from '../ui/Popup/Popup';

import s from './DayCardList.module.scss'

export function DayCardList({ ...props }) {
	const { listData } = useInfo();
	const [openPopup, setOpenPopup] = useState<boolean>(false);
	const [activeId, setActiveId] = useState<number>(0);
	const openPopupHandler = (id: number) => {
		setActiveId(id)
		setOpenPopup(true)
	}
	return (
		<div className={s.list} >
			{listData?.map((day, i) => (
				<DayCard
					key={day.dt}
					date_week={day.date_week}
					time={day.time}
					icon_id={day.weather.icon}
					temp_day={day.temp}
					info={day.weather.description}
					openPopup={openPopupHandler}
					id={i}
				/>
			))}
			{
				listData && <Popup classes={openPopup ? 'active' : ' '} closePopup={setOpenPopup}>
					<DetailsDay data={listData[activeId]} />
				</Popup>
			}
		</div>
	);
}
export default widthErrorApi(DayCardList);
