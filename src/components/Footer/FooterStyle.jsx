import styled from 'styled-components';
import { device } from '../../styles/ThemeStyles';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 2rem;

	@media ${device.mobileM} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${device.tablet} {
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
	}
	@media ${device.laptop} {
		grid-template-columns: repeat(4, 1fr);
		gap: 5rem;
	}
`;

export const FooterContent = styled.div``;

export const FooterTitle = styled.h2`
	font-weight: 600;
	margin-top: 1.6rem;
	margin-top: 1rem;
`;

export const FooterLinks = styled.ul`
	display: grid;
	row-gap: 1.8rem;
	margin-top: 2rem;
`;

export const FooterLink = styled.li``;

export const FooterNavLink = styled(Link)`
	font-size: 1.6rem;
	font-weight: 400;
`;
