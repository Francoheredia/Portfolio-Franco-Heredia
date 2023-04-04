import { Button, Flex } from "@chakra-ui/react"
import { Logo } from "./components"

export const NavBar = () =>{
    return(
        <Flex>
            <Flex>
            <Logo />
            </Flex>
            <Flex>
                <Button>Home</Button>
                <Button>Homess</Button>
                <Button>asjdjak</Button>
            </Flex>
        </Flex>
    )
}