import React from 'react'
import ReactDOM from 'react-dom/client'  
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import { PortfolioMe } from './PortfolioMe'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PortfolioMe />
    </ChakraProvider>
  </React.StrictMode>,
)
