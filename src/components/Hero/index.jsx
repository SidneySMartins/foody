import { Container, StyledButton } from '../common/CommonStyle';
import HomeLogo from '../../assets/images/Home.jpg';
import { HeroContainer, HeroDescription, HeroTitle } from './HeroStyle';

const Hero = () => {
	return (
		<section>
			<Container>
				<HeroContainer>
					<img src={HomeLogo} alt='logo' />
					<div>
						<HeroTitle>We serve the taste you love</HeroTitle>
						<HeroDescription>
							This is a type of restaurant which typically serves food and
							drinks, in addition to light refreshments such ad baked goods or
							snacks. The term comes from the rench word meaning food.
						</HeroDescription>
						<StyledButton>Explore Food</StyledButton>
					</div>
				</HeroContainer>
			</Container>
		</section>
	);
};
export default Hero;
