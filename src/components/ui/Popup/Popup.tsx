import * as React from 'react';
import cn from 'classnames'
import { createPortal } from "react-dom"

import s from './Popup.module.scss'

export interface IPopupProps {
	closePopup: (value: boolean) => void
	classes: string;
	children: React.ReactNode
}
export const Popup = ({ closePopup, classes, children }: IPopupProps) => {
	const clickHandlerClose = () => {
		closePopup(false)
	}
	const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}
	return (
		createPortal(<div className={cn(s.wrap, classes)} onClick={clickHandlerClose}>
			<div className={cn(s.popup, 'card')} onClick={clickHandler}>
				<div className={s.popup_close} onClick={clickHandlerClose}></div>
				{children}
			</div>
		</div>
			, document.body));
}

