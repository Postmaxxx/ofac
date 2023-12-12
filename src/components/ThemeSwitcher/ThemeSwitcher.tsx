import { useEffect, useRef } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import './theme-switcher.scss'



//switch the app theme
export const ThemeSwitcher = (): JSX.Element => {
	const { theme, setTheme }  = useAppContext()
	const _themeSwitcher = useRef<HTMLInputElement>(null)

	useEffect(() => {
		document.body.classList.toggle('dark', theme === 'dark')
		localStorage.setItem('theme', theme)
	}, [theme])


	useEffect(() => {
		_themeSwitcher.current && (_themeSwitcher.current.checked = theme ==='dark' ? true : false)
	}, [_themeSwitcher.current])
	
	
	const onChangeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTheme(e.target.checked ? 'dark' : 'light')
	}

	return (
		<div className="theme-switcher-wrapper">
			<div className="theme-switcher">
				<input onChange={(e) => onChangeTheme(e)} type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" ref={_themeSwitcher}/>
				<label htmlFor="themeSwitch" className="theme-switch__label" aria-label='Switch the app theme'>
					<span aria-label='Switch theme'></span>
				</label>
			</div>
		</div>

	)
}