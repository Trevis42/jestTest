# Jest Testing

We are creating a test suite to test functionallity of our Calculator class.

The Calculator will have an initial value given to it, and we will chain each function to the class to do calculations

The methods are:
- add()
- subtract()
- multiple()
- divide()
- equals()
- clear()
- rpn()
	
Each operation function will take a number as a parameter and equals will output the final results.

Updated equals to return 0 if not parameters are passed to Calculator.

To clear out the register, we need to call clear().

New function rpn() takes in an expression in revese polish notation and returns the calcuated result.
It returns `0` if nothing is passed in.
