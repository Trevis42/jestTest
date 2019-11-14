class Calculator {
  constructor(value) {
    this.value = value;
  }

  equals() {
    if (this.value === null || this.value === undefined) {
      return 0;
    } else {
      return this.value;
    }
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
  //support + _ * /
  rpn(expression) {
    let result = 0;
    let stack = [];
    let expArr = [];
    if (expression === undefined || expression === null) {
      return 0;
    } else {
      expArr = expression.split(" ");
    }
    for (const v of expArr) {
      console.log(typeof Number.parseInt(v));
      stack.push(v);
      if (isNaN(parseInt(v))) {
        stack.pop();
        if (v === "+") {
          //addition
          let var2 = stack.pop();
          let var1 = stack.pop();
          let preResult = Number(var1) + Number(var2);

          stack.push(preResult);
        }

        if (v === "-") {
          //subtraction
          let var2 = stack.pop();
          let var1 = stack.pop();
          let preResult = Number(var1) - Number(var2);

          stack.push(preResult);
        }

        if (v === "*") {
          //multiplication
          let var2 = stack.pop();
          let var1 = stack.pop();
          let preResult = Number(var1) * Number(var2);

          stack.push(preResult);
        }

        if (v === "/") {
          //division
          let var2 = stack.pop();
          let var1 = stack.pop();
          let preResult = Number(var1) / Number(var2);

          stack.push(preResult);
        }
      }
    }

    if (stack.length > 1) {
      return "Expression invalid (too many remaining items in stack)";
    } else {
      result = stack.pop();
    }
    return result;
  }
}
module.exports = Calculator;
