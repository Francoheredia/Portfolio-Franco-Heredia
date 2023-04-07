import { Box, Container, Divider } from '@chakra-ui/react';
import { AboutMe, Home, NavBar } from './components';

export const PortfolioMe = () => {
	return (
		<Box>
			<NavBar />
			<Divider />
			<Container centerContent maxW='8xl'>
				<Home />
				<Divider mt={20} />
				<AboutMe />
			</Container>
		</Box>
	);
};
