import { Container, Section } from '../common/CommonStyle';
import { MenuData } from './MenuData';
import {
	MenuContainer,
	MenuDescription,
	MenuCard,
	MenuTitle,
	MenuName,
	MenuCta,
	MenuPrice,
} from './MenuStyle';
import { CtaBtn } from '../common/CommonStyle';
import { AiTwotoneStar } from 'react-icons/ai';

const Menu = () => {
	return (
		<Section>
			<Container>
				<MenuTitle>Popular Dishes</MenuTitle>
				<MenuContainer>
					{MenuData.map((data) => {
						return (
							<MenuCard key={data.id}>
								<img src={data.image} alt='dish_image' />

								<MenuName>{data.title}</MenuName>
								<div>
									<AiTwotoneStar />
									<AiTwotoneStar />
									<AiTwotoneStar />
									<AiTwotoneStar />
									<AiTwotoneStar />
								</div>
								<MenuDescription>{data.description}</MenuDescription>
								<MenuCta>
									<MenuPrice>{data.price}</MenuPrice>
									<CtaBtn>Add to cart</CtaBtn>
								</MenuCta>
							</MenuCard>
						);
					})}
				</MenuContainer>
			</Container>
		</Section>
	);
};
export default Menu;
