import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Projets } from '../../data/projects';
import { WorkCard } from './components';
import { motion } from 'framer-motion';

export const Works = () => {
	const BoxMotion = motion(Box);
	return (
		<BoxMotion
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.4 }}>
			<Heading textAlign='center'>All Creative Works 💻 </Heading>
			<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} mt={20}>
				{Projets.map((project) => {
					return <WorkCard project={project} key={project.title} />;
				})}
			</SimpleGrid>
		</BoxMotion>
	);
};
