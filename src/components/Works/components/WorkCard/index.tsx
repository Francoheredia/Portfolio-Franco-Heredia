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
	Tag,
	TagLabel,
	Wrap,
} from '@chakra-ui/react';
interface Props {
	project: Project;
}

import { FaGithub, FaLink } from 'react-icons/fa';

export const WorkCard: React.FC<Props> = ({ project }) => {
	const { title, summary, imageUrl, stack } = project;
	return (
		<Box
			bg='backgroundBox'
			borderWidth='1px'
			borderRadius={7}
			maxHeight='1000px'
			height={['full', 'full']}
			width='full'
			maxH='1000px'>
			<Image
				src={imageUrl}
				borderTopRadius={10}
				h='auto'
				w='auto'
				objectFit='cover'
			/>
			<Box p={5}>
				<Flex justify='space-between' align='center' mb={3}>
					<Heading fontSize={{ sm: '25px' }}>{title}</Heading>
					<HStack>
						<IconButton aria-label='' variant='ghost' icon={<FaGithub />} />
						<IconButton aria-label='' variant='ghost' icon={<FaLink />} />
					</HStack>
				</Flex>
				<Box>
					<Wrap mb={2.5}>
						<Box>
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
						<Box>
							<Tag>
								<Image
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
									w='15px'
									h='15px'
									mr={1}
								/>
								<TagLabel>Typescript</TagLabel>
							</Tag>
						</Box>
						<Box>
							<Tag>
								<Image
									src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'
									w='15px'
									h='15px'
									mr={1}
								/>
								<TagLabel>Node Js</TagLabel>
							</Tag>
						</Box>
						<Box>
							<Tag>
								<Image
									src='https://img.icons8.com/color/512/chakra-ui.png'
									w='15px'
									h='15px'
									mr={1}
								/>
								<TagLabel>Chakra UI</TagLabel>
							</Tag>
						</Box>
						<Box>
							<Tag>
								<Image
									src='https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png'
									w='15px'
									h='15px'
									mr={1}
								/>
								<TagLabel>Express</TagLabel>
							</Tag>
						</Box>
						<Box>
							<Tag>
								<Image
									src='https://www.svgrepo.com/show/331488/mongodb.svg'
									w='15px'
									h='15px'
									mr={1}
								/>
								<TagLabel>Mongo DB</TagLabel>
							</Tag>
						</Box>
						<Box>
							<Tag>
								<Image
									src='https://assets.vercel.com/image/upload/front/zeit/twitter-card.png'
									w='15px'
									h='15px'
									mr={1}
								/>
								<TagLabel>Vercel</TagLabel>
							</Tag>
						</Box>
					</Wrap>

					<Divider mb={1} />
					<Text mt={2}>{summary}</Text>
				</Box>
			</Box>
		</Box>
	);
};
