/**
 *  génére un nombre aléatoire, entier et positif, contenant 6 chiffres.

 * @returns {number} un nombmre généré.
 */

export function generateRandomNumberId(): number {
    return Math.floor(100000 + Math.random() * 900000);
}
export default generateRandomNumberId;