import { useState, ReactNode, createContext } from 'react'
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables';
import { Theme } from '../types/types';
import { setLocalStorage } from '../utils/localeStorage';

import { getLocalStorage } from "../utils/localeStorage";
interface IThemeContext {
	theme: Theme
	changeTheme: (theme: Theme) => void;
}
interface IThemeProvider {
	children: ReactNode
}
const local_theme: Theme | null = getLocalStorage('theme')
const initialState = local_theme ? local_theme : Theme.LIGHT

export const ThemeContext = createContext<IThemeContext>({
	theme: initialState,
	changeTheme: () => { }
})
export const ThemeProvider = ({ children, ...props }: IThemeProvider) => {
	const [theme, setTheme] = useState<Theme>(initialState);
	const changeTheme = (theme: Theme) => {
		setTheme(theme)
		ChangeCssRootVariables(theme)
		setLocalStorage('theme', theme)
	}
	return <ThemeContext.Provider value={{
		theme,
		changeTheme
	}}
		{...props}
	>
		{children}
	</ThemeContext.Provider>
}