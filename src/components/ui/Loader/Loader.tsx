import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';

import s from "./Loader.module.scss"

interface LoaderProps {
	id: string
}
export const Loader = ({ id }: LoaderProps) => {
	return (
		<div className={s.loader}>
			<GlobalSvgSelector id={id} />
			<div className={s.loader_text}>
				{id === "error" && 'Помилка при завантаженнi даних'}
				{id === "loader" && '... завантаження данних'}
			</div>
		</div>
	);
}
