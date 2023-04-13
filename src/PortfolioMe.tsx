import { Box, Container, Divider, SimpleGrid } from '@chakra-ui/react';
import {
	AboutMe,
	Home,
	NavBar,
	Contact,
	Footer,
	Skills,
	Works,
} from './components';

export const PortfolioMe = () => {
	return (
		<Box>
			<NavBar />
			<Divider />
			<Container centerContent maxW='8xl'>
				<SimpleGrid column={1} spacing={[50, 50, 160, 190, 185]} mt={70}>
					<Home />
					<Divider />
					<AboutMe />
					<Skills />
					<Works />
					<Contact />
				</SimpleGrid>
			</Container>
			<Footer />
		</Box>
	);
};
