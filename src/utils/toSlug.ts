
/*
 * Convertit une chaîne de caractères en un slug.
 * 
 * @param saisie - La chaîne à convertir.
 * @returns Le slug généré.
 */

export function toSlug  (saisie: string) : string {
    return saisie
        .toLowerCase() // Convertir en minuscules
        .normalize('NFD') // Normaliser pour décomposer les accents
        .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
        .replace(/[^a-z0-9\s-]/g, '') // Supprimer les caractères spéciaux
        .trim() // Supprimer les espaces en début et fin
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/--+/g, '-'); // Supprimer les tirets en trop
};

export default toSlug;