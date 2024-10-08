import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";
import { expect, test } from "bun:test";
test('Dois générer un nombre aléatoire composé de six chiffres', () => {
    const id = generateRandomNumberId();
    expect(id).toBeGreaterThanOrEqual(100000);
    expect(id).toBeLessThanOrEqual(999999);
  });