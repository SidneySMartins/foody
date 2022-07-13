import styled from 'styled-components';
import { device } from '../../styles/ThemeStyles';

export const HeroContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	text-align: center;
	row-gap: 2rem;
	height: 100vh;
	img {
		margin: 10px auto;
		height: 200px;
		width: 200px;
		justify-content: center;
		align-self: end;
		border-radius: 50%;
	}
	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		column-gap: 9.6rem;
		text-align: left;
		img {
			height: 300px;
			width: 300px;
			order: 1;
			align-self: center;
		}
	}
`;

export const HeroTitle = styled.h1`
	font-size: 5rem;
	font-weight: 700;
	margin-bottom: 0.8rem;
	color: ${(props) => props.theme.TitleColor};
`;

export const HeroDescription = styled.p`
	line-height: 2;
	margin-bottom: 1rem;
	color: ${(props) => props.theme.TextColor};
	margin-top: 3rem;
`;
