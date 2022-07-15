import React, { useContext } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import ThemeContext from '../context/theme';

function Navbar() {
	const [theme, setTheme] = useContext(ThemeContext);

	const RenderThemeIcon = () => {
		if (theme === 'dark') {
			return (
				<svg
					className='sun'
					viewBox='0 0 24 24'
					onClick={() => setTheme('light')}
				>
					<g className='lines'>
						<line x1='1' y1='12' x2='2' y2='12'></line>
						<line x1='4.2' y1='4.2' x2='4.9' y2='4.9'></line>
						<line x1='12' y1='1' x2='12' y2='2'></line>
						<line x1='19.8' y1='4.2' x2='19.1' y2='4.9'></line>
						<line x1='23' y1='12' x2='22' y2='12'></line>
						<line x1='19.8' y1='19.8' x2='19.1' y2='19.1'></line>
						<line x1='12' y1='23' x2='12' y2='22'></line>
						<line x1='4.2' y1='19.8' x2='4.9' y2='19.1'></line>
					</g>
					<circle cx='12' cy='12' r='6'></circle>
				</svg>
			);
		} else {
			return (
				<svg
					className='moon'
					viewBox='0 0 24 24'
					onClick={() => setTheme('dark')}
				>
					<path d='M18,16C12.5,16,8,11.5,8,6 c0-0.9,0.1-1.8,0.4-2.6C4.1,4.5,1,8.4,1,13c0,5.5,4.5,10,10,10c4.6,0,8.5-3.1,9.6-7.4C19.8,15.9,18.9,16,18,16z'></path>
					<g className='star-1'>
						<line x1='15' y1='1' x2='15' y2='5'></line>
						<line x1='13' y1='3' x2='17' y2='3'></line>
					</g>
					<g className='star-2'>
						<line x1='21' y1='7' x2='21' y2='11'></line>
						<line x1='19' y1='9' x2='23' y2='9'></line>
					</g>
				</svg>
			);
		}
	};

	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div className='container'>
				<div className='navbar-brand'>
					<div className='navbar-item'>
						<span className='has-background-primary has-text-white p-2 has-text-weight-bold is-family-primary is-flex is-align-items-center'>
							<BiSearchAlt className='is-size-4' /> GOOG
						</span>
					</div>
				</div>

				<div className='navbar-menu is-align-items-center'>
					<div className='navbar-end'>
						<div className='dark-mode-container'>
							<RenderThemeIcon />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

Navbar.defaultProps = {
	theme: 'light',
	setTheme: (data) => console.log(data),
};

export default Navbar;
