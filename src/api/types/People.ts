
export interface Person {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    vehicles: string[];
    planet_name?: string;
}

export default interface People {
    count: string;
    next?: string;
    previous?: string;
    results: Person[];
}
