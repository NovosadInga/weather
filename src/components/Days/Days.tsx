import { Button } from "../ui/Button/Button";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { setFilterWeather } from "../../store/slices/filterWeatherSlice";
import { selectFilterAll } from "../../store/selectors/filterWeatherSelector";
import { DaysContent } from "../DaysContent/DaysContent";

import s from "./Days.module.scss";


export const Days = () => {
	const { active, values } = useCustomSelector(selectFilterAll)
	const dispatch = useCustomDispatch()
	return (
		<div className={s.days}>
			<div className={s.days_filters}>
				{values.map((f) => (
					<Button
						key={f.value}
						classes={`filter ${f.key === active ? "active" : ""}`}
						onClick={() => {
							dispatch(setFilterWeather(f.key))
						}}
						text={f.value}
					/>
				))}
			</div>
			<DaysContent />
		</div>
	);
};
