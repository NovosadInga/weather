import Select from 'react-select'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCities } from '../../store/selectors/citiesSelectors';
import { setCurrentCity } from '../../store/slices/citiesSlice';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { fetchDetailWeather } from '../../store/thunks/fetchDetailWeather';
import { Theme } from '../../types/types';
import { SelectorStyle } from './SelectorStyle';
export interface ICitySelectProps {
	theme: Theme
}
export const CitySelect = ({ theme }: ICitySelectProps) => {
	const style = SelectorStyle(theme)
	const dispatch = useCustomDispatch()
	const { options, active } = useCustomSelector(selectCities)
	const onChangeCity = (newValue: any) => {
		dispatch(setCurrentCity(newValue))
		dispatch(fetchCurrentWeather(newValue.value))
		dispatch(fetchDetailWeather(newValue.value))
	}
	return (
		<div>
			<Select
				options={options}
				styles={style}
				value={active}
				onChange={onChangeCity}
				isSearchable={false}
			/>
		</div>
	);
}
