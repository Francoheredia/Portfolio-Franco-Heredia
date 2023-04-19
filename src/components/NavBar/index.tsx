import {
	Button,
	Flex,
	Link,
	IconButton,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
} from '@chakra-ui/react';
import { Logo } from './components';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiFillHome, AiFillThunderbolt } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';

// import { Link as Linked } from 'react-scroll';

export const NavBar = () => {
	return (
		<Flex w='100%' h='70px'>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				w='100%'
				h='70px'
				py={2}
				px={[2, 2, 3, 5, 5]}>
				<Logo />
				<Flex>
					<Flex display={['none', 'none', 'flex', 'flex', 'flex']}>
						<Button mx={2} variant='link'>
							<Link>Home</Link>
						</Button>
						<Button mx={2} variant='link'>
							<Link>About</Link>
						</Button>
						<Button mx={2} variant='link'>
							<Link>Works</Link>
						</Button>
						<Button mx={2} variant='link'>
							<Link>@ Contact</Link>
						</Button>
					</Flex>
					<Flex display={['flex', 'flex', 'none', 'none', 'none']}>
						<Menu gutter={10}>
							<MenuButton as={IconButton} icon={<HamburgerIcon />}></MenuButton>
							<MenuList>
								<MenuItem as='a' href='#' icon={<AiFillHome />}>
									Home
								</MenuItem>
								<MenuItem as='a' href='#about' icon={<BsFillPersonFill />}>
									About
								</MenuItem>
								<MenuItem as='a' href='#skill' icon={<AiFillThunderbolt />}>
									Skill
								</MenuItem>
								<MenuItem as='a' href='#works' icon={<MdComputer />}>
									Works
								</MenuItem>
								<MenuItem as='a' href='#contact'>
									@ Contact
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
