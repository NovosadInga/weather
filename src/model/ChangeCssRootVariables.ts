const root = document.querySelector(':root') as HTMLElement
const variables = [
	'body-background',
	'card-background',
	'day-background',
	'text-color'
]
export const ChangeCssRootVariables = (theme: string) => {
	variables.forEach(variable => {
		root.style.setProperty(`--${variable}-default`, `var(--${variable}-${theme})`)
	})
}
