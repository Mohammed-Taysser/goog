import React, { useState } from 'react';

const ThemeContext = React.createContext([{}, (data) => console.log(data)]);

function ThemeProvider(props) {
	const [theme, setTheme] = useState('light');
	const setRealTheme = (themeValue = 'light') => {
		if (themeValue === 'light') {
			document.body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
		setTheme(themeValue);
	};

	return (
		<ThemeContext.Provider value={[theme, setRealTheme]}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export { ThemeProvider };

export default ThemeContext;
