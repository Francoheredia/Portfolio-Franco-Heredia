import { HStack, Text, Icon } from '@chakra-ui/react';

import { FaCode } from 'react-icons/fa';

export const Logo = () => {
	return (
		<HStack align='center'>
			<Icon as={FaCode} />
			<Text> Franco</Text>
		</HStack>
	);
};
