import { penjumlahan } from "$/lib/arithmetic";
import { expect, test } from "bun:test";

test("Penjumlahan", () => {
  const result = penjumlahan(2, 2);
  expect(result).toBe(4);
});

test("Pengurangan", () => {
  expect(7 - 2).toBe(5);
});

test("Pembagian", () => {
  expect(3 / 3).toBe(1);
});

test("Perkalian", () => {
  expect(2 * 2).toBe(4);
});
