import cn from 'classnames'

import s from './Button.module.scss';

interface IButtonProps {
	text: string,
	classes?: string,
	onClick: () => void
}
export const Button = ({ text, classes, onClick }: IButtonProps) => {
	return (
		<button onClick={onClick} className={cn(s.button, (classes ? classes : ''))}>
			{text}
		</button>
	);
}
