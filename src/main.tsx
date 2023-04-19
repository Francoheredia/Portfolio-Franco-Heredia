import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './styles/theme';
import { PortfolioMe } from './PortfolioMe';
import { AnimatePresence } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<AnimatePresence initial={true}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<PortfolioMe />
			</AnimatePresence>
		</ChakraProvider>
	</React.StrictMode>,
);
