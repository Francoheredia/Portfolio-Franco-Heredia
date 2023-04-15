import { Box, Tag, TagLabel, TagRightIcon, Text } from '@chakra-ui/react';

import { SiVercel } from 'react-icons/si';

export const Footer = () => {
	return (
		<Box id='footer' textAlign='center' mt={[40, 40, 40, 200]} mb={5}>
			<Text fontSize={15}>Designed and Developed by Franco Falcon Heredia</Text>
			<Tag size={['md', 'md', 'lg']} mt={3} colorScheme='#000' variant='solid'>
				<TagLabel fontWeight='semibold'>Deployed by vercel</TagLabel>
				<TagRightIcon as={SiVercel} />
			</Tag>
		</Box>
	);
};
