import { Button, Flex, Link, IconButton } from '@chakra-ui/react';
import { Logo } from './components';
import { HamburgerIcon } from '@chakra-ui/icons';

export const NavBar = () => {
	return (
		<Flex>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				w='100%'
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
					<IconButton
						display={['flex', 'flex', 'none', 'none', 'none']}
						aria-label='Open Menu'
						size='lg'
						icon={<HamburgerIcon />}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};
