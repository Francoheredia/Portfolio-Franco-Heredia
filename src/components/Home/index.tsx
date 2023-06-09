import {
	Box,
	Wrap,
	Text,
	Heading,
	Stack,
	Button,
	Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const BoxMotion = motion(Box);

export const Home = () => {
	return (
		<BoxMotion
			id='home'
			mt={20}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}>
			<Wrap align='center' h='auto'>
				<Box textAlign='left' width={['100%', '100%', '100%', '53%', '55%']}>
					<Text
						color='textPrimary'
						fontWeight='semibold'
						fontSize={['20px', '20px', '23px', '25px']}>
						Hey there! , I'm...
					</Text>
					<Heading fontSize={['40px', '40px', '55px', '60px']}>
						Franco Falcon Heredia
					</Heading>
					<Text mt={2} fontSize={['20px', '25px', '30px']}>
						Software Developer. A self-taught developer with an interest in
						Computer Science and Technology.
					</Text>
					<Stack mt={5} color='textSecondary'>
						<Text>🚀 &nbsp; Exploring opportunities and side projects.</Text>
						<Text>
							💻 &nbsp; Currently specializing in
							<Text color='textPrimary' as='span' fontWeight='semibold' m={1}>
								Full Stack Development REACT + NODE.
							</Text>
						</Text>
						<Text>🏙️ &nbsp; Currently based out of Mendoza Argentina.</Text>
					</Stack>
					<Wrap mt={10} flexDir='row' spacing={5}>
						<Button
							as='a'
							href='https://github.com/Francoheredia'
							target='_blank'
							leftIcon={<FaGithub />}>
							GitHub
						</Button>
						<Button
							as='a'
							href='https://www.linkedin.com/in/francoherediadev/'
							target='_blank'
							leftIcon={<FaLinkedin />}>
							LinkedIn
						</Button>
						<Button
							as='a'
							href='mailto:francofalcondev@gmail.com'
							target='_blank'
							leftIcon={<FaMailBulk />}>
							Email
						</Button>
					</Wrap>
				</Box>
				<Box width={['100%', '100%', '100%', '38%', '40%']}>
					<Image
						width='full'
						height='full'
						mt={5}
						borderRadius={20}
						boxShadow='lg'
						src='https://i.ibb.co/k8sQKx7/javascripttttt.jpg'
					/>
				</Box>
			</Wrap>
		</BoxMotion>
	);
};
