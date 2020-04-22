// write a function, power, that takes two numbers as a base and an exponent. It should return the power of the base to the expoent

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

//recursive

function power(base, exp) {
    if(exp === 0) return 1;
    return base * power(base, exp-1)
}

console.log(power(2,4))