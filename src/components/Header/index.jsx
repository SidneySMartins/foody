import { Container, StyledButton } from '../common/CommonStyle';
import {
	Hamburger,
	HeaderContainer,
	HeaderTitle,
	Wrapper,
} from './HeaderStyle';
import { GiHamburgerMenu } from 'react-icons/Gi';

const Header = () => {
	return (
		<Wrapper>
			<Container>
				<HeaderContainer>
					<HeaderTitle to='/'>Foody</HeaderTitle>
					<StyledButton>Reserve Table</StyledButton>
					<Hamburger>
						<GiHamburgerMenu />
					</Hamburger>
				</HeaderContainer>
			</Container>
		</Wrapper>
	);
};
export default Header;
