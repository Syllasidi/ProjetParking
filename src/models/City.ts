import { toSlug } from '../utils/toSlug';
import { GPS } from '../types/GPS';

/**
 * Représente une ville.
 */
export default class City {
    id: number;
    name: string;
    slug: string;
    parkingsIds: number[];
    country: string;
    location: GPS;

    constructor(id: number, name: string, country: string, location: GPS) {
        this.id = id;
        this.name = name;
        this.slug = toSlug(name);
        this.parkingsIds = [];
        this.country = country;
        this.location = location;
    }
}
