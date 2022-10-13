import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../types/types';
import { CitySelect } from '../CitySelect/CitySelect';

import s from "./Header.module.scss"


export const Header = () => {
	const { theme, changeTheme } = useTheme()
	const { pathname } = useLocation();
	useEffect(() => {
		changeTheme(theme)
	}, []);
	return (
		<div className={s.header}>
			<div className="container">
				<div className={s.wrapper}>
					<div className={s.block}>
						<div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
						<div className={s.title}>Weather UA</div>
					</div>
					<div className={s.block}>
						<div className={s.theme} onClick={() => { changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT) }}>
							<GlobalSvgSelector id="change-theme" />
						</div>
						{pathname === "/" && <div className={s.select}>
							<CitySelect theme={theme} />
						</div>}
					</div>
				</div>
			</div>
		</div>
	);
}
