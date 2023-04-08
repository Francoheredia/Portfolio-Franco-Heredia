import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Projets } from '../../data/projects';
import { WorkCard } from './components';

export const Works = () => {
	return (
		<Box>
			<Heading>All Creative Works.</Heading>;
			<SimpleGrid column={2}>
				{Projets.map((project) => {
					return <WorkCard project={project} key={project.title} />;
				})}
			</SimpleGrid>
		</Box>
	);
};
