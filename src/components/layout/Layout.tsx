import { Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Stage from './Stage';
import PeopleTable from '../ui/PeopleTable';
import bgVideo from '../../assets/stars-bg.mp4';
import styled from '@emotion/styled';

const StyledVideo = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
`;

function Layout() {

    return (
        <Flex h="100vh" w="100vw" bgColor="black" flexWrap={{ base: "wrap", lg: "nowrap" }}>
            <StyledVideo autoPlay muted loop>
                <source src={bgVideo} type="video/mp4" />
            </StyledVideo>
            <Sidebar />
            <Stage>
                <PeopleTable />
            </Stage>
        </Flex>
    );
}

export default Layout;
