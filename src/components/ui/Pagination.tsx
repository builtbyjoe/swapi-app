import { Button, Flex, Text, TableCaption } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

interface Props {
    disableNext: boolean;
    disablePrev: boolean;
    currentPage: number;
    count: number;
    onNext: () => void;
    onPrev: () => void;
}

function Pagination({ disableNext, disablePrev, currentPage, count, onNext, onPrev }: Props) {
    return (
        <TableCaption>
            <Flex alignItems="center" w="100%" justifyContent="center">
                <Button
                    isDisabled={disablePrev}
                    leftIcon={<ArrowBackIcon />}
                    variant="outline"
                    size="sm"
                    onClick={onPrev}
                >
                    Back
                </Button>
                <Text ml="15px" mr="15px">Page {currentPage} of {Math.round(count / 10)}</Text>
                <Button
                    isDisabled={disableNext}
                    rightIcon={<ArrowForwardIcon />}
                    variant="outline"
                    size="sm"
                    onClick={onNext}
                >
                    Next
                </Button>
            </Flex>
        </TableCaption>
    );
}

export default Pagination;
