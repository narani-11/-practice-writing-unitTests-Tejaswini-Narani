// tests/cart.test.js
const { addItem, removeItem, getTotalItems } = require('../cart');

describe("Shopping Cart Module", () => {
  let cart;

  beforeEach(() => {
    cart = []; // fresh cart before each test
  });

  // --- addItem ---
  test("Positive: add a new item with valid name and quantity", () => {
    addItem(cart, "Apple", 2);
    expect(cart).toEqual([{ item: "Apple", quantity: 2 }]);
  });

  test("Negative: do not add item with negative quantity", () => {
    addItem(cart, "Banana", -3);
    expect(cart).toEqual([]);
  });

  test("Edge Case: do not add item with quantity 0", () => {
    addItem(cart, "Orange", 0);
    expect(cart).toEqual([]);
  });

  // --- removeItem ---
  test("Positive: remove an existing item", () => {
    addItem(cart, "Mango", 1);
    removeItem(cart, "Mango");
    expect(cart).toEqual([]);
  });

  test("Negative: removing an item not in the cart does nothing", () => {
    addItem(cart, "Apple", 1);
    removeItem(cart, "Banana"); // Banana not there
    expect(cart).toEqual([{ item: "Apple", quantity: 1 }]);
  });

  test("Edge Case: remove the last item from the cart", () => {
    addItem(cart, "Peach", 2);
    removeItem(cart, "Peach");
    expect(cart).toEqual([]);
  });

  // --- getTotalItems ---
  test("Positive: calculate total items correctly", () => {
    addItem(cart, "Apple", 2);
    addItem(cart, "Banana", 3);
    expect(getTotalItems(cart)).toBe(5);
  });

  test("Negative: handle an empty cart", () => {
    expect(getTotalItems(cart)).toBe(0);
  });

  test("Edge Case: calculate correctly with large quantities", () => {
    addItem(cart, "Watermelon", 1000);
    addItem(cart, "Mango", 2000);
    expect(getTotalItems(cart)).toBe(3000);
  });
});
