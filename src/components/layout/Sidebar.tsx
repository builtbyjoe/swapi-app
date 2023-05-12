import { theme, VStack, Heading, Highlight } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StyledVStack = styled(VStack)`
    background: none;
    padding: 50px 25px;
    width: 100%;
    position: relative;

    @media only screen and (min-width: ${theme.breakpoints.lg}) {
        min-width: 400px;
        max-width: 400px;
        width: auto;
        padding: 75px 35px;
        border-right: 1px solid white;
        height: 100vh;
    }
`;

function Sidebar() {

    return (
        <StyledVStack>
            <Heading size="3xl" color="white">
                <Highlight query="Discover" styles={{ px: "1", bg: "green.100" }}>
                    Discover the people of the galaxy.
                </Highlight>
            </Heading>
        </StyledVStack>
    );
}

export default Sidebar;
