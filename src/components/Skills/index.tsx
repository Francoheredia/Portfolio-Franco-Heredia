import {
	SimpleGrid,
	Box,
	Heading,
	Divider,
	List,
	ListItem,
	ListIcon,
	Flex,
	Icon,
	Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { BsPatchCheckFill } from 'react-icons/bs';
import { FaTools, FaReact, FaDatabase } from 'react-icons/fa';

const BoxMotion = motion(Box);

export const Skills = () => {
	return (
		<BoxMotion
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.4 }}>
			<Heading textAlign='center'>⚡ Skills</Heading>
			<Center>
				<SimpleGrid columns={[1, null, 3]} spacing={20} mt={100}>
					<Box
						w='300px'
						bg='#171923'
						borderRadius={20}
						p={10}
						borderWidth='1px'
						borderColor='gray.700'>
						<Flex align='center'>
							<Heading fontSize={25}> Front End</Heading>
							<Icon as={FaReact} boxSize={7} ml={2} />
						</Flex>

						<Divider mt={4} />
						<List mt={5}>
							<ListItem>
								<ListIcon as={BsPatchCheckFill} />
								React
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Typescipt
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Css
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Html
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Chakra UI
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Tailwind
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Redux
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Context API
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								React Native
							</ListItem>
						</List>
					</Box>
					<Box
						w='300px'
						bg='#171923'
						borderRadius={20}
						p={10}
						borderWidth='1px'
						borderColor='gray.700'>
						<Flex align='center'>
							<Heading fontSize={25}> Back End</Heading>
							<Icon as={FaDatabase} boxSize={7} ml={2} />
						</Flex>
						<Divider mt={4} />
						<List mt={5}>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Node
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Typescipt
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Express
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Socket io
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								NestJs
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Mongodb
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								SQL
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								SOA
							</ListItem>
						</List>
					</Box>
					<Box
						w='300px'
						bg='#171923'
						borderRadius={20}
						p={10}
						borderWidth='1px'
						borderColor='gray.700'>
						<Flex align='center'>
							<Heading fontSize={25}> Tools </Heading>
							<Icon as={FaTools} boxSize={7} ml={2} />
						</Flex>
						<Divider mt={4} />
						<List mt={5}>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Postman
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Git & GitHub
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Vercel
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Slack
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Railways
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Visual Stuido Code
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Terminal
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Jest
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Npm
							</ListItem>
							<ListItem>
								{' '}
								<ListIcon as={BsPatchCheckFill} />
								Linux
							</ListItem>
						</List>
					</Box>
				</SimpleGrid>
			</Center>
		</BoxMotion>
	);
};
