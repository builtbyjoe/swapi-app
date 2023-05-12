import { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import PlanetsApiEndpoint from '../../api/endpoints/planetsApi';

interface Props {
    endpoint: string;
}

function HomePlanet({ endpoint }: Props) {
    const planetsApiEndpoint = useMemo(() => new PlanetsApiEndpoint(axios), []);
    const [planetName, setPlanetName] = useState('Please wait...');

    useEffect(() => {
        planetsApiEndpoint.get(endpoint)
            .then((x) => setPlanetName(x.name === 'unknown' ? 'N/A' : x.name))
            .catch(() => setPlanetName('N/A'));
    }, [endpoint, planetsApiEndpoint]);
    
    return (
        <>{planetName}</>
    );
}

export default HomePlanet;
