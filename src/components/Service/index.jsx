import { Container, Section, StyledButton } from '../common/CommonStyle';
import {
	ServiceContainer,
	ServiceDescription,
	ServiceDetails,
	ServiceDetailsTitle,
	ServiceTitle,
} from './ServiceStyle';
import ServiceChef from '../../assets/images/service-chef.png';

const Service = () => {
	return (
		<Section>
			<Container>
				<ServiceContainer>
					<img src={ServiceChef} alt='service_chef' />
					<div>
						<ServiceTitle>We are more than multiple Service</ServiceTitle>
						<ServiceDescription>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
							enim recusandae veritatis sunt necessitatibus distinctio vitae
							doloribus vel quidem quisquam.
						</ServiceDescription>
						<ServiceDetails>
							<ServiceDetailsTitle>Online Order</ServiceDetailsTitle>
							<ServiceDetailsTitle>Pre-Reservation</ServiceDetailsTitle>
							<ServiceDetailsTitle>24/7 Service</ServiceDetailsTitle>
							<ServiceDetailsTitle>Organized Foodie Place</ServiceDetailsTitle>
							<ServiceDetailsTitle>Clean Kitchen</ServiceDetailsTitle>
							<ServiceDetailsTitle>Super Chefs</ServiceDetailsTitle>
							<ServiceDetailsTitle>Online Order</ServiceDetailsTitle>
						</ServiceDetails>
						<StyledButton>About Us</StyledButton>
					</div>
				</ServiceContainer>
			</Container>
		</Section>
	);
};
export default Service;
