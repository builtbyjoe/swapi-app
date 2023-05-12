import { useState, useMemo } from 'react';
import axios from 'axios';
import {
    Flex,
    Text,
    PopoverHeader,
    Box,
    PopoverBody,
    Heading,
    PopoverContent,
    PopoverTrigger,
    Popover,
    PopoverCloseButton,
    IconButton,
    Spinner,
    PopoverArrow
} from '@chakra-ui/react';
import { RiSpaceShipFill } from 'react-icons/ri';
import StarshipsApiEndpoint from '../../api/endpoints/starshipsApi';
import ErrorMessage from './ErrorMessage';

interface Vehicle {
    name: string;
    model: string;
    crew: string;
    passengers: string;
    manufacturer: string;
}

interface Props {
    index: number;
    endpoint: string;
}

function VehicleInfo({ index, endpoint }: Props) {
    const [vehicleInfo, setVehicleInfo] = useState<Vehicle | undefined>();
    const [errorMessage, setErrorMessage] = useState();
    const starshipsApiEndpoint = useMemo(() => new StarshipsApiEndpoint(axios), []);

    const handleGetVehicle = (endpoint: string) => {
        setErrorMessage(undefined);
        setVehicleInfo(undefined);
        starshipsApiEndpoint.get(endpoint)
            .then((x) => {
                setVehicleInfo({
                    name: x.name,
                    model: x.model,
                    crew: x.crew,
                    passengers: x.passengers,
                    manufacturer: x.manufacturer,
                })
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <Popover>
            <PopoverTrigger>
                <IconButton mr="8px" aria-label={`Vehicle ${index}`} icon={<RiSpaceShipFill />} onClick={() => handleGetVehicle(endpoint)} />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {!errorMessage && !vehicleInfo && (
                    <PopoverBody textAlign="center">
                        <Spinner />
                    </PopoverBody>
                )}
                {!errorMessage && vehicleInfo && (
                    <>
                        <PopoverHeader>{vehicleInfo.name}</PopoverHeader>
                        <PopoverBody whiteSpace="normal">
                            <Flex flexWrap="wrap">
                                <Box w="50%">
                                    <Heading size="xs" textTransform="uppercase">
                                    Model name
                                    </Heading>
                                    <Text pt="2" fontSize="sm">{vehicleInfo.model}</Text>
                                </Box>
                                <Box w="50%">
                                    <Heading size="xs" textTransform="uppercase">
                                    Manufacturer
                                    </Heading>
                                    <Text pt="2" fontSize="sm">{vehicleInfo.manufacturer}</Text>
                                </Box>
                                <Box w="50%" mt="15px">
                                    <Heading size="xs" textTransform="uppercase">
                                    Crew capacity
                                    </Heading>
                                    <Text pt="2" fontSize="sm">{vehicleInfo.crew}</Text>
                                </Box>
                                <Box w="50%" mt="15px">
                                    <Heading size="xs" textTransform="uppercase">
                                    Passenger capacity
                                    </Heading>
                                    <Text pt="2" fontSize="sm">{vehicleInfo.passengers}</Text>
                                </Box>
                            </Flex>
                        </PopoverBody>
                    </>
                )}
            </PopoverContent>
        </Popover>
    );
}

export default VehicleInfo;
