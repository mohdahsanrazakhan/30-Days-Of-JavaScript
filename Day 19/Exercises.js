/* Exercise level 1 */

// Question 1: Create a closure which has one inner function
function outerFunc() {
    let num1 = 5;
    function innerFunc() {
        let sum = 5 + num1;
        return sum;
    }
    return innerFunc
}
const callFunc = outerFunc()
console.log(callFunc())



/* Exercise level 2 */

// Question 2: Create a closure which has three inner functions
function outerFunction() {
    let count = 5;
    function plusFive() {
        count += 5
        return count
    }
    function minusFive() {
        count -= 5
        return count
    }
    function plusTwo() {
        count += 2;
        return count
    }

    return {
        plusFive: plusFive(),
        minusFive: minusFive(),
        plusTwo: plusTwo()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusFive)
console.log(innerFuncs.minusFive)
console.log(innerFuncs.plusTwo)
