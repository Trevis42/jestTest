//import Calculator from "./calculator.js";
const Calculator = require("./calculator");

describe("Calculator", () => {
	test("has getter on `register` called `equals", () => {
		const subject = new Calculator(5);
		expect(subject.equals).toBeDefined();
	});

	test("has function called `add` that adds `number` to `register`", () => {
		expect(new Calculator(5).add(3).equals()).toBe(8);
	});

	test("has function called `subtract` that subtracts `number` from `register`", () => {
		expect(new Calculator(5).subtract(3).equals()).toBe(2);
	});

	test("has function called `multiply` that multiplies `number` with `register`", () => {
		expect(new Calculator(5).multiply(3).equals()).toBe(15);
	});

	test("has function called `divide` that divides `register` by `number`", () => {
		expect(new Calculator(10).divide(2).equals()).toBe(5);
	});

	test("has function called `clear` that clears the `register` setting it to `0`", () => {
		expect(
			new Calculator(5)
				.clear()
				.add(3)
				.equals()
		).toBe(3);
	});
});
