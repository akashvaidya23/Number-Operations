const node = () => {
    const node = document.createElement('li');
    const textNode = document.createTextNode(result);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
}

const number = () => {
    return num = document.querySelector('#num').value;
}

const sunFxn = (num) => {
    add = 0;
    number();
    for (let i = 1; i <= num; i++) {
        add = add + i;
    }
    return result = `The sum of first ${num} natural numbers is ${add}.`;
}

const Sum = (e) => {
    e.preventDefault();
    number();
    sunFxn(num);
    node();
}

const getFactorial = (num) => {
    let fact = 1;
    number();
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return result = `The factorial of ${num} is ${fact}`;
}

const Factorial = (e) => {
    e.preventDefault();
    number();
    getFactorial(num);
    node();
}

const getEvenOdd = (num) => {
    var flag = 0;
    if (num % 2 == 0) {
        flag = 0;
    } else {
        flag = 1;
    }
    if (flag == 0) {
        return result = `The number ${num} is even`;
    } else {
        return result = `The number ${num} is odd`;
    }
}

const evenOdd = (e) => {
    e.preventDefault();
    number();
    getEvenOdd(num);
    node();
}

const checkPrime = (num) => {
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            return result = `The number ${num} is not prime`;
        }
        return result = `The number ${num} is prime`;
    }
}

const Prime = (e) => {
    e.preventDefault();
    number();
    checkPrime(num);
    node();
}

const myFunction = () => {
    document.getElementById("numForm").reset();
    document.getElementById('result').innerText = '';
}

const getAllPrime = (num) => {
    let prime = [];
    for (var i = 2; i <= num; i++) {
        let flag = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            prime.push(i);
        }
    }
    return result = `The prime numbers upto ${num} are ${prime}`;
}

const allPrime = (e) => {
    e.preventDefault();
    number();
    getAllPrime(num);
    node();
}

const fibonacci = (num) => {
    let i = 0;
    let j = 1;
    let k = '';
    let fib = [];
    for (let i = 1; i <= num; i++) {
        fib.push(i);
        k = i + j;
        i = j;
        j = k;
    }
    return result = `The fibonacci series till ${num} is ${fib}`;
}

const getFibonacci = (e) => {
    e.preventDefault();
    number();
    fibonacci(num);
    node();
}

const armstrong = (num) => {
    let len = num.length;
    let pow = 0;
    for (let i = 0; i < len; i++) {
        let pow1 = Math.pow(num[i], len);
        pow += pow1;
    }
    if (num == pow) {
        return result = `The number ${num} is a Armstrong Number`;
    } else {
        return result = `The number ${num} is not a Armstrong Number`;
    }
}

const getArmstrong = (e) => {
    e.preventDefault();
    number();
    armstrong(num);
    node();
}