import { useState } from 'react';
import { Container, StyledButton } from '../common/CommonStyle';
import {
	Hamburger,
	HeaderContainer,
	HeaderTitle,
	Wrapper,
} from './HeaderStyle';
import { GiHamburgerMenu } from 'react-icons/Gi';
import NavBar from '../NavBar';

const Header = ({ setTheme }) => {
	const [sideMenu, setSideMenu] = useState(false);

	return (
		<Wrapper>
			<Container>
				<HeaderContainer>
					<HeaderTitle to='/'>Foody</HeaderTitle>
					<NavBar setTheme={setTheme} sideMenu={sideMenu} />
					<StyledButton>Reserve Table</StyledButton>
					<Hamburger onClick={() => setSideMenu(!sideMenu)}>
						<GiHamburgerMenu />
					</Hamburger>
				</HeaderContainer>
			</Container>
		</Wrapper>
	);
};
export default Header;
