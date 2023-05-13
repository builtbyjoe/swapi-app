import { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, Skeleton, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import PeopleApiEndpoint from '../../api/endpoints/peopleApi';
import { Person } from '../../api/types/People';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import VehicleInfo from './VehicleInfo';
import ErrorMessage from './ErrorMessage';
import HomePlanet from './HomePlanet';

function PeopleTable() {
    const peopleApiEndpoint = useMemo(() => new PeopleApiEndpoint(axios), []);
    const [people, setPeople] = useState<Person[]>([]);
    const [count, setCount] = useState(1);
    const [errorMessage, setErrorMessage] = useState();
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setErrorMessage(undefined);
        setIsLoading(true);
        peopleApiEndpoint.getAll(currentPage, searchTerm)
            .then((x) => {
                setCount(Number(x.count));
                setHasNextPage(x.next !== null);
                setHasPrevPage(x.previous !== null);
                setPeople([...x.results]);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [peopleApiEndpoint, currentPage, searchTerm]);

    return (
        <>
            <SearchBar
                onSetIsLoading={setIsLoading}
                onSearch={(value) => setSearchTerm(value)}
            />
            <Card w="100%">
                <CardBody>
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    {!errorMessage && isLoading && (
                        <Stack>
                            <Skeleton height="20px" />
                            <Skeleton height="20px" />
                            <Skeleton height="20px" />
                        </Stack>
                    )}
                    {!errorMessage && !isLoading && (
                        <TableContainer>
                            <Table>
                                <Pagination
                                    currentPage={currentPage}
                                    count={count}
                                    disableNext={!hasNextPage}
                                    disablePrev={!hasPrevPage}
                                    onNext={() => setCurrentPage((prev) => prev + 1)}
                                    onPrev={() => setCurrentPage((prev) => prev - 1)}
                                />
                                <Thead>
                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Home planet</Th>
                                        <Th isNumeric>Films starred in</Th>
                                        <Th>Vehicles</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {people.length === 0 && (
                                        <Tr>
                                            <Td colSpan={4} textAlign="center">No results found 🙁</Td>
                                        </Tr>
                                    )}
                                    {people.map((x: Person) => {
                                        return (
                                            <Tr key={x.name}>
                                                <Td>{x.name}</Td>
                                                <Td><HomePlanet endpoint={x.homeworld} /></Td>
                                                <Td isNumeric>{x.films.length}</Td>
                                                <Td>{x.vehicles.length > 0 && x.vehicles.map((x, i) => {
                                                    return (
                                                        <VehicleInfo
                                                            key={i}
                                                            index={i}
                                                            endpoint={x}
                                                        />
                                                    );
                                                })}</Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </CardBody>
            </Card>
        </>
    );
}

export default PeopleTable;
