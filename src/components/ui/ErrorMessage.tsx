import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StyledText = styled(Text)`
    color: red;
    padding: 20px;
    text-align: center;
    width: 100%;
`;


interface Props {
    children: string;
}

function ErrorMessage({ children }: Props) {
    return (
        <StyledText>{children}</StyledText>
    );
}

export default ErrorMessage;
