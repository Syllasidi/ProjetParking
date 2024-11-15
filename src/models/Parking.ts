import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { GPS } from '../types/GPS';
import Spot from './Spot';

/**
 * Représente un parking.
 */
export default class Parking {
    id: number;
    name: string;
    city_id: number;
    location: GPS;
    numberOfSpots: number;
    opened: boolean;
    hourlyRate: number;
    parkIds: number[];
    spots: Spot[];
  city: any;

    constructor(id : number, name: string, city_id: number, location: GPS, numberOfSpots: number, hourlyRate: number) {
        this.id = id;
        this.name = name;
        this.city_id = city_id;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened = true;
        this.hourlyRate = hourlyRate;
        this.parkIds = [];
        this.spots = Array.from({ length: numberOfSpots }, () => new Spot(this.id));
    }
}
 