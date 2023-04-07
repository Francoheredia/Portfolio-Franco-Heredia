import { Wrap, Text, Heading, Image, Box, Stack } from '@chakra-ui/react';

export const AboutMe = () => {
	return (
		<Wrap align='center'>
			<Box width={['100%', '100%', '100%', '53%', '50%']}>
				<Heading>👨‍💻 About Me</Heading>
				<Stack spacing={7} mt={7} w='90%'>
					<Text>
						Hey there! My name is Ryan Le and I am a 2021 graduate of the
						University of Nebraska-Lincoln with a Bachelor of Science degree in
						Software Engineering - minor in Mathematics.
					</Text>
					<Text>
						I am a Vietnamese-American front-end developer originally from Sioux
						Falls, South Dakota. Currently, I am based out of the New York City
						area. I primarily work with web-based technologies such as React.js,
						TypeScript, JavaScript, Node.js, and Tailwind CSS, among other
						things.
					</Text>
					<Text>
						I got my start in the world of software engineering at the young age
						of 11 when I was invited to join Re-Logic as a Beta Tester for the
						hit indie game, Terraria.
					</Text>
					<Text>
						Aside from my work as a software engineer, I spend my free time
						biking around the city, catching up on video game releases from over
						the years, and traveling the US. It's my personal goal to visit each
						one of the fifty states, and I'm about halfway there so far.
					</Text>
				</Stack>
			</Box>
			<Box width={['100%', '100%', '100%', '38%', '43%']}>
				<Image
					width='full'
					height='auto'
					mt={5}
					borderRadius='full'
					boxShadow='lg'
					src='https://i.ibb.co/C79SWcX/adssajksdajd-copia-2.jpg'
				/>
			</Box>
		</Wrap>
	);
};
