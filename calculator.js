class Calculator {
	constructor(value) {
		this.value = value;
	}

	equals() {
		return this.value;
	}

	clear() {
		this.value = 0;
		return this;
	}

	add(num) {
		this.value += num;
		return this;
	}

	subtract(num) {
		this.value -= num;
		return this;
	}

	multiply(num) {
		this.value *= num;
		return this;
	}

	divide(num) {
		this.value /= num;
		return this;
	}
}
module.exports = Calculator;
