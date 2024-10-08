import { v4 as uuidv4 } from 'uuid';

/**
 * Représente le stationnement d'un véhicule.
 */
export default class Park {
    id: string;
    spot_id: number;
    startedAt: Date;
    endedAt: Date;
    price: number;
    paid: boolean;

    constructor(spot_id: number, price: number) {
        this.id = uuidv4();
        this.spot_id = spot_id;
        this.startedAt = new Date();
        this.endedAt = new Date();
        this.price = price;
        this.paid = false;
    }
}
