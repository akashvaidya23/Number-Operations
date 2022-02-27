const sunFxn = (num) => {
    add = 0;
    for (let i = 1; i <= num; i++) {
        add = add + i;
    }
    return add;
}
const Sum = (e) => {
    e.preventDefault();
    var num = document.querySelector('#num').value;
    sunFxn(num);
    let sum = `The sum of first ${num} natural numbers is ${add}.`;
    const node = document.createElement('li');
    const textNode = document.createTextNode(sum);
    console.log(node);
    console.log(textNode);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
}

const Factorial = (e) => {
    var num = document.querySelector('#num').value;
    e.preventDefault();
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    let fact1 = `The factorial of ${num} is ${fact}`;
    const node = document.createElement('li');
    const textNode = document.createTextNode(fact1);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
}

const evenOdd = (e) => {
    var num = document.querySelector('#num').value;
    e.preventDefault();
    var flag = 0;
    if (num % 2 == 0) {
        flag = 0;
    } else {
        flag = 1;
    }
    if (flag == 0) {
        result = `The number ${num} is even`;
    } else {
        result = `The number ${num} is odd`;
    }
    const node = document.createElement('li');
    const textNode = document.createTextNode(result);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
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
    var num = document.querySelector('#num').value;
    checkPrime(num);
    const node = document.createElement('li');
    const textNode = document.createTextNode(result);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
}

const myFunction = () => {
    document.getElementById("numForm").reset();
    document.getElementById('result').innerText = '';
}

// const threeLasrgest = (a,b,c)=>{
//   var largest = 0;
//   if(a>b){
//     if(a>c){
//       largest = a;
//     }else{
//       largest = c;
//     }
//   }
//   else{
//     if(b>c){
//       largest = b;
//     }
//     else{
//       largest = c;
//     }
//   }
//   return largest;
// }

// console.log(threeLasrgest(3,2,1));

const getAllPrime = (num) => {
    let prime = [];
    for (var i = 2; i < num; i++) {
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
    var num = document.querySelector('#num').value;
    getAllPrime(num);
    const node = document.createElement('li');
    const textNode = document.createTextNode(result);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
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
    var num = document.querySelector('#num').value;
    fibonacci(num);
    const node = document.createElement('li');
    const textNode = document.createTextNode(result);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
}

const armstrong = (num) => {
    let len = num.length;
    let pow = 0;
    // console.log(typeof(num));
    for (let i = 0; i < len; i++) {
        let pow1 = Math.pow(num[i], len);
        pow += pow1;
    }
    if (num == pow) {
        return true;
    }
    return false;
}

const getArmstrong = (e) => {
    e.preventDefault();
    var num = document.querySelector('#num').value;
    armstrong(num);
    if (true) {
        alert("a")
        let result = `The number ${num} is a Armstrong Number`;
    } else {
        alert('b');
        let result = `The number ${num} is not a Armstrong Number`;
    }
    const node = document.createElement('li');
    console.log(node);
    const textNode = document.createTextNode(result);
    console.log(textNode);
    node.appendChild(textNode);
    document.getElementById('result').appendChild(node);
}