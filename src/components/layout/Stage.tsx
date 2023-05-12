import React from 'react';
import { theme, Wrap } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Props {
    children: React.ReactNode;
}

const StyledWrap = styled(Wrap)`
    padding: 0 25px 50px;
    position: relative;

    @media only screen and (min-width: ${theme.breakpoints.lg}) {
        flex-grow: 2;
        height: 100vh;
        overflow: scroll;
        padding: 75px 50px;
    }

    @media only screen and (min-width: ${theme.breakpoints.xl}) {
        padding: 75px 100px;
    }
`;

function Stage({ children }: Props) {

    return (
        <StyledWrap>{children}</StyledWrap>
    );
}

export default Stage;
