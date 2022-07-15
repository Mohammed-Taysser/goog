import React, { useEffect } from 'react';
import Layout from './layouts';
import Homepage from './pages/homepage';
import { ThemeProvider } from './context/theme';

function App() {
	useEffect(() => {
		// detect theme
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, []);

	return (
		<ThemeProvider>
			<Layout>
				<Homepage />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
