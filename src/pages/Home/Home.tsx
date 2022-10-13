import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { Days } from "../../components/Days/Days";
import { ThisDay } from "../../components/ThisDay/ThisDay";
import { ThisDayInfo } from "../../components/ThisDayInfo/ThisDayInfo";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { fetchDetailWeather } from "../../store/thunks/fetchDetailWeather";
import s from "./Home.module.scss";
import { selectActiveCity } from "../../store/selectors/citiesSelectors";

export const Home = () => {
	const active = useCustomSelector(selectActiveCity);
	const dispatch = useCustomDispatch();
	useEffect(() => {
		dispatch(fetchCurrentWeather(active.value));
		dispatch(fetchDetailWeather(active.value));
	}, []);
	return (
		<div className={s.home}>
			<div className="container">
				<div className={s.home_top}>
					<ThisDay />
					<ThisDayInfo />
				</div>
				<Days />
			</div>
		</div>
	);
};
