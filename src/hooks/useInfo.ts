import { useState, useEffect } from "react"

import { getDataDays } from "../services/getInfoDay";
import { selectDetailAll } from "../store/selectors/detailWeatherSelector";
import { selectFilterActive } from "../store/selectors/filterWeatherSelector";
import { ListData } from "../types/types";
import { useCustomSelector } from "./store";
export const useInfo = () => {
	const { daily, hourly } = useCustomSelector(selectDetailAll);
	const active = useCustomSelector(selectFilterActive);
	const [listData, setListData] = useState<ListData[] | null>(null);
	useEffect(() => {
		const data = getDataDays(active, daily, hourly)
		setListData(data)
	}, [active, daily]);
	return { listData }
}

