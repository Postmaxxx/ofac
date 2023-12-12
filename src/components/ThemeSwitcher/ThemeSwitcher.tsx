import { useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import './theme-switcher.scss'


export const ThemeSwitcher = () => {
	const { theme, setTheme }  = useAppContext()

	const onChangeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		document.body.classList.toggle('dark', theme === 'dark')
	}, [theme])


	return (
		<button onClick={onChangeTheme}>{theme === 'dark' ? 'light' : 'dark'}</button>

	)
}