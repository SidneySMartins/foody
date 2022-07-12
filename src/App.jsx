import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/ThemeStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components';

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<Header />
			</ThemeProvider>
		</Router>
	);
};
export default App;
