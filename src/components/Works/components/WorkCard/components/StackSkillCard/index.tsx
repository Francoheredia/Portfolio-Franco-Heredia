import { Tag, TagLabel, Image, Box } from '@chakra-ui/react';

interface Props {
	stack: string[];
}

export const StackSkillCard: React.FC<Props> = () => {
	return (
		<Box mb={2}>
			<Tag>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
					w='15px'
					h='15px'
					mr={1}
				/>
				<TagLabel>React</TagLabel>
			</Tag>
		</Box>
	);
};
