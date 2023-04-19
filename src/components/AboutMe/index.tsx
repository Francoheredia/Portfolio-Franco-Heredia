import {
	Wrap,
	Text,
	Heading,
	Image,
	Box,
	Stack,
	Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const WrapMotion = motion(Wrap);

export const AboutMe = () => {
	return (
		<WrapMotion
			id='about'
			align='center'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.4 }}>
			<Box width={['100%', '100%', '100%', '53%', '50%']}>
				<Heading>👨‍💻 About Me</Heading>
				<Stack spacing={7} mt={7} w='90%'>
					<Text>
						Hey there! My name is Franco and I am a self-taught programmer,
						graduated in 2021 from the Soyhenry bootcamp.
					</Text>
					<Text>
						I am a Argentine Full stack developer, currently living in Mendoza
						City. I work as technologies such as React.js , Typescript , Node.js
						, Nest.js , Chakra Ui , Tailwind Css, Mongo Db database and SQL
						among other things.
					</Text>
					<Text>
						I started in the programming world in mid 2019. my first steps were
						in Pseint. Then I was part of a group of self-taught students where
						we followed a roadmap to become web developers.
					</Text>
					<Text>
						My work cycle began as a Teaching Assistant at soyhenry where I
						supported students in their bootcamp process, then I had the
						opportunity to work in Kuna a company dedicated to monitoring rice
						fields, where I worked in the mobile area with React Native. After
						that I was in some projects as a freelancer with React and Node.
						Currently I'm working as a Backend tutor in the CoderHouse platform.
					</Text>
					<Text>
						Apart from my work, I am passionate about soccer ⚽. I also love
						biology and astrology 🌌.
					</Text>
				</Stack>
			</Box>
			<Box width={['100%', '100%', '100%', '38%', '43%']}>
				<Center>
					<Image
						width='full'
						height='auto'
						mt={5}
						boxSize={{ sm: '200px', md: '400px', lg: '500px' }}
						borderRadius='full'
						boxShadow='lg'
						objectFit='cover'
						src='https://i.ibb.co/C79SWcX/adssajksdajd-copia-2.jpg'
					/>
				</Center>
			</Box>
		</WrapMotion>
	);
};
