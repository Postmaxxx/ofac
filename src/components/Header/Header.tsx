import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import './header.scss'


export const Header = (): JSX.Element => {
	return (
		<header>
			<div className="container">
				<div className="header__content">
					<span>OFAC checker</span>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}