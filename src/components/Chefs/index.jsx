import { Container, Section } from '../common/CommonStyle';
import {
	ChefData,
	ChefName,
	ChefsContainer,
	SectionTitle,
} from './ChefsStyled';

import { ChefsData } from './ChefsData';

const Chefs = () => {
	return (
		<Section>
			<Container>
				<SectionTitle>Meet Our Chefs</SectionTitle>
				<ChefsContainer>
					{ChefsData.map((data) => {
						return (
							<ChefData key={data.id}>
								<img src={data.image} alt='chef' />
								<ChefName>{data.name}</ChefName>
							</ChefData>
						);
					})}
				</ChefsContainer>
			</Container>
		</Section>
	);
};
export default Chefs;
