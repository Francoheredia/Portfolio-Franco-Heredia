import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px

}



const colors = {
    textPrimary: '#CB4478',
    textSecondary: '#8F9094',
    backgroundBox: '#171923',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
 
    breakpoints,
    colors,
    config
 
});




export default theme;