import _ from 'lodash';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Props {
    onSetIsLoading: (value: boolean) => void;
    onSearch: (value: string) => void;
}

function SearchBar({ onSetIsLoading, onSearch }: Props) {
    const debouncedSearch = _.debounce((term: string) => onSearch(term), 750);

    return (
        <Flex w="100%" justifyContent="space-between" alignItems="center" pb="15px">
            <InputGroup maxW="320px" bgColor="white" borderRadius="0.375rem">
                <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input type="search" placeholder="Search people" variant="filled" onChange={(e) => {
                    onSetIsLoading(true);
                    debouncedSearch(e.currentTarget.value);
                }} />
            </InputGroup>
        </Flex>
    );
}

export default SearchBar;
