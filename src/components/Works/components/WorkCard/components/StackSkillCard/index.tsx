import { Tag, TagLabel, Image } from '@chakra-ui/react';

interface Props {
	stack: string[];
}

export const StackSkillCard: React.FC<Props> = () => {
	return (
		<>
			<Tag>
				<Image />
				<TagLabel></TagLabel>
			</Tag>
		</>
	);
};
