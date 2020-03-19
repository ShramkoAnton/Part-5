function step(firstValue, secondValue) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let arr2 = ['1', '2', '3', '4', '5', '6', '7', '8'];
    return arr.indexOf(firstValue[0]) - arr.indexOf(secondValue[0]) === arr2.indexOf(firstValue[1]) - arr2.indexOf(secondValue[1]);
}

a= step('b3', 'c4');
console.log(a);