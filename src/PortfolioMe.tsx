import { Box, Container, Divider } from '@chakra-ui/react';
import { AboutMe, Home, NavBar, Contact, Footer, Skills } from './components';

export const PortfolioMe = () => {
	return (
		<Box>
			<NavBar />
			<Divider />
			<Container centerContent maxW='8xl'>
				<Home />
				<Divider mt={20} />
				<AboutMe />
				<Skills />
				<Contact />
			</Container>
			<Footer />
		</Box>
	);
};
