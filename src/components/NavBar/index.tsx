import {
	Button,
	Flex,
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
import { Link } from 'react-scroll';

export const NavBar = () => {
	return (
		<Flex
			w='100%'
			h='70px'
			position='fixed'
			zIndex={222}
			bg='backgroundBox'
			borderBottomWidth='1px'>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				w='100%'
				h='70px'
				py={2}
				px={[2, 2, 3, 5, 5]}>
				<Logo />
				<Flex>
					<Flex display={['none', 'none', 'flex', 'flex', 'flex']} gap={3}>
						<Link
							to='home'
							spy={true}
							smooth={true}
							duration={700}
							offset={-100}>
							<Button variant='ghost' leftIcon={<AiFillHome />}>
								Home{' '}
							</Button>
						</Link>
						<Link
							to='about'
							spy={true}
							smooth={true}
							duration={700}
							offset={-100}>
							<Button variant='ghost' leftIcon={<BsFillPersonFill />}>
								About
							</Button>
						</Link>
						<Link
							to='skill'
							spy={true}
							smooth={true}
							duration={700}
							offset={-100}>
							<Button variant='ghost' leftIcon={<AiFillThunderbolt />}>
								Skill
							</Button>
						</Link>
						<Link
							to='works'
							spy={true}
							smooth={true}
							duration={700}
							offset={-100}>
							<Button variant='ghost' leftIcon={<MdComputer />}>
								Works
							</Button>
						</Link>
						<Link
							to='contact'
							spy={true}
							smooth={true}
							duration={700}
							offset={-100}>
							<Button variant='ghost'>@ Contact</Button>
						</Link>
					</Flex>
					<Flex display={['flex', 'flex', 'none', 'none', 'none']}>
						<Menu gutter={10}>
							<MenuButton as={IconButton} icon={<HamburgerIcon />}></MenuButton>
							<MenuList>
								<Link
									to='home'
									spy={true}
									smooth={true}
									duration={700}
									offset={-100}>
									<MenuItem icon={<AiFillHome />}>Home </MenuItem>
								</Link>
								<Link
									to='about'
									spy={true}
									smooth={true}
									duration={700}
									offset={-100}>
									<MenuItem icon={<BsFillPersonFill />}>About</MenuItem>
								</Link>
								<Link
									to='skill'
									spy={true}
									smooth={true}
									duration={700}
									offset={-100}>
									<MenuItem icon={<AiFillThunderbolt />}>Skill</MenuItem>
								</Link>
								<Link
									to='works'
									spy={true}
									smooth={true}
									duration={700}
									offset={-100}>
									<MenuItem icon={<MdComputer />}>Works</MenuItem>
								</Link>
								<Link
									to='contact'
									spy={true}
									smooth={true}
									duration={700}
									offset={-100}>
									<MenuItem>@ Contact</MenuItem>
								</Link>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
