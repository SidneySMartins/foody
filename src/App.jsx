import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/ThemeStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Chefs, Footer, Header, Hero, Reviews, Service } from './components';
import Menu from './components/Menu';

const App = () => {
	const [theme, setTheme] = useState('light');

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<Router>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyle />
				<Header setTheme={changeTheme} />
				<Hero />
				<Menu />
				<Service />
				<Reviews />
				<Chefs />
				<Footer />
			</ThemeProvider>
		</Router>
	);
};
export default App;
