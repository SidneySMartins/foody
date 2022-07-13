import { Carousel } from 'react-responsive-carousel';
import { Container, Section } from '../common/CommonStyle';
import {
	ReviewContainer,
	ReviewData,
	ReviewCard,
	SectionTitle,
	CustomerReviews,
	CustomerName,
} from './ReviewsStyle';
import UserOne from '../../assets/images/user-1.jpg';
import UserTwo from '../../assets/images/user-2.jpg';

const Reviews = () => {
	return (
		<Section>
			<Container>
				<SectionTitle>What our customer says</SectionTitle>
				<ReviewData>
					<Carousel
						autoPlay={true}
						showArrows={false}
						showIndicators={false}
						showThumbs={false}
						infiniteLoop={true}
					>
						<ReviewContainer>
							<ReviewCard>
								<CustomerReviews>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eligendi hic earum suscipit optio aperiam officiis veniam
									necessitatibus sed, aliquam quia praesentium libero provident
									est debitis?
								</CustomerReviews>
								<img src={UserOne} alt='user' />
								<CustomerName>Maria Scott</CustomerName>
							</ReviewCard>
							<ReviewCard>
								<CustomerReviews>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eligendi hic earum suscipit optio aperiam officiis veniam
									necessitatibus sed, aliquam quia praesentium libero provident
									est debitis?
								</CustomerReviews>
								<img src={UserTwo} alt='user' />
								<CustomerName>Ana Smith</CustomerName>
							</ReviewCard>
						</ReviewContainer>

						<ReviewContainer>
							<ReviewCard>
								<CustomerReviews>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eligendi hic earum suscipit optio aperiam officiis veniam
									necessitatibus sed, aliquam quia praesentium libero provident
									est debitis?
								</CustomerReviews>
								<img src={UserOne} alt='user' />
								<CustomerName>Sarah Lee</CustomerName>
							</ReviewCard>
							<ReviewCard>
								<CustomerReviews>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eligendi hic earum suscipit optio aperiam officiis veniam
									necessitatibus sed, aliquam quia praesentium libero provident
									est debitis?
								</CustomerReviews>
								<img src={UserTwo} alt='user' />
								<CustomerName>Sofia Park</CustomerName>
							</ReviewCard>
						</ReviewContainer>
					</Carousel>
				</ReviewData>
			</Container>
		</Section>
	);
};
export default Reviews;
