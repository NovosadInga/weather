import { Theme } from "../../types/types";

export const SelectorStyle = (theme: Theme) => (
	{
		control: (styles: any) => (
			{
				...styles,
				backgroundColor: theme === Theme.LIGHT ? 'rgba(71, 147, 255, 0.2)' : '#4F4F4F',
				width: "100%",
				height: 37,
				barderRadius: 10,
				border: "none",
				zIndex: 100,
				color: 'white',
				fontSize: 16,
				fontWeight: 500,

			}
		),
		indicatorSeparator: (styles: any) => ({
			...styles,
			display: 'none'
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme === Theme.DARK ? '#fff' : '#000',
			textAlign: 'center'
		}),
		dropdownIndicator: (styles: any) => ({
			...styles,
			color: theme === Theme.DARK ? '#fff' : '#000',
		}),
		menuList: (styles: any) => ({
			...styles,
			fontSize: 16,
		}),
	})