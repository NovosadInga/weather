import cn from "classnames";
import { useCustomSelector } from "../../hooks/store";
import ThisDayContent from "../ThisDayContent/ThisDayContent";
import { selectCurrentAll } from "../../store/selectors/currentWeatherSlelectors";

import s from "./ThisDay.module.scss";

export const ThisDay = ({ ...props }) => {
	const { isLoading, error } = useCustomSelector(selectCurrentAll);
	return (
		<div className="card">
			<div className={cn(s.thisDay)}>
				<ThisDayContent isLoading={isLoading} error={error} />
			</div>
		</div>
	);
};

