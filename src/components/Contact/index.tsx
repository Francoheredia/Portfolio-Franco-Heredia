import { HStack, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineFileText, AiFillMail } from 'react-icons/ai';

export const Contact = () => {
	return (
		<Stack id='contact' align='center' spacing={7} textAlign='center'>
			<Heading fontSize={[40, 45, 45, 45, 50]}>Let's chat! </Heading>
			<Text>
				I'm currently specializing in Full Stack Development. <br /> Feel free
				to get in touch and talk more about your projects.
			</Text>
			<HStack spacing={3}>
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
					leftIcon={<AiFillMail />}>
					Email
				</Button>
				<Button
					as='a'
					href='https://resume.io/r/57x5TrMME'
					leftIcon={<AiOutlineFileText />}>
					Resume
				</Button>
			</HStack>
		</Stack>
	);
};

//mt={[35, 35, 35, 100, 100]}
