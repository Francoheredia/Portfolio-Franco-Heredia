import React from 'react';
import { Project } from '../../interface/projectInterface';
import {
	Box,
	Divider,
	Flex,
	HStack,
	Heading,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react';
interface Props {
	project: Project;
}

import { FaGithub, FaLink } from 'react-icons/fa';
import { StackSkillCard } from './components';

export const WorkCard: React.FC<Props> = ({ project }) => {
	const { title, summary, imageUrl, stack } = project;
	return (
		<Box>
			<Image src={imageUrl} h='auto' w='auto' objectFit='cover' />
			<Box>
				<Flex justify='space-between' align='center'>
					<Heading>{title}</Heading>
					<HStack>
						<IconButton aria-label='' variant='ghost' icon={<FaGithub />} />
						<IconButton aria-label='' variant='ghost' icon={<FaLink />} />
					</HStack>
				</Flex>
			</Box>
			<Box>
				<StackSkillCard stack={stack} />
				<Divider />
				<Text>{summary}</Text>
			</Box>
		</Box>
	);
};
