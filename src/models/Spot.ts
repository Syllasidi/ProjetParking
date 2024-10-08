import { generateRandomNumberId } from '../utils/generateRandomNumberId';

/**
 * Représente une place de parking.
 */
export default class Spot {
    id: number;
    parking_id: number;

    constructor(parking_id: number) {
        this.id = generateRandomNumberId();
        this.parking_id = parking_id;
    }
}
