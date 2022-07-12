import { createGlobalStyle } from 'styled-components';
import { device, darkTheme, lightTheme } from './ThemeStyles';

export const GlobalStyle = createGlobalStyle`
		*{
			box-sizing: border-box;
			padding: 0;
			margin: 0;
			 
		}	
		html{
			font-size: 62.5%;
			scroll-behavior: smooth;
		}
		body{
			background-color: ${(props) => props.theme.BodyColor};
			color: ${(props) => props.theme.TextColor};
			transition: 0.5s;
		}
		img{
			max-width: 100%;
			height: auto;
		}
		a{
			text-decoration: none;
			color: ${(props) => props.theme.TitleColor};
			&:hover{
				color: ${(props) => props.theme.MikadoYellow};
			}
		}
		ul,li{
			list-style: none;
		}
		h1{
			font-size: 3rem;
			@media ${device.tablet}{
				font-size: 4rem;
			}
			@media ${device.laptopS}{
				font-size: 4.5rem;
			}
		}
		h2{
			font-size: 1.9rem;
			@media ${device.tablet}{
				font-size: 2rem;
			}
			@media ${device.laptop}{
				font-size: 2.5rem;
			}
		}
		p{
			font-size: 1.2rem;
			@media ${device.tablet}{
				font-size: 1.4rem;
			}
			@media ${device.laptop}{
				font-size: 1.6rem;
			}
		}
`;
