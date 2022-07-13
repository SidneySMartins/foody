import {
	NavBarContainer,
	NavLink,
	NavItem,
	NavIcon,
	NavList,
} from './NavBarStyle';
import { BsSun } from 'react-icons/bs';

const NavBar = ({ sideMenu, setTheme }) => {
	return (
		<NavBarContainer>
			<NavList sideMenu={sideMenu}>
				<NavItem>
					<NavLink to='/'>Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/'>Menu</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/'>Services</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/'>Reviews</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/'>Chefs</NavLink>
				</NavItem>
				<NavIcon onClick={setTheme}>
					<BsSun />
				</NavIcon>
			</NavList>
		</NavBarContainer>
	);
};
export default NavBar;
