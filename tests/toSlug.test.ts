import { toSlug } from '../src/utils/toSlug';
test('toSlug function', () => {
    expect(toSlug('Je suis 1 cas d école')).toBe('je-suis-1-cas-d-ecole');
    expect(toSlug('Programmation Web')).toBe('programmation-web');
    expect(toSlug('L3 MIASHS - IDMC - Université de Lorraine')).toBe('l3-miashs-idmc-universite-de-lorraine');
});
