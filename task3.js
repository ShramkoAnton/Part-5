function convertString(str) {
    let arr = str.split('');
    let swapEven = arr.filter((element, index) => !(index%2));
    let swapOdd = arr.filter((element, index) => (index%2));

    swapEven.sort();
    swapOdd.sort();

    return `${swapEven},${swapOdd}`
}

function swipeStr(str1, str2) {
    const res = convertString(str1) === convertString(str2);
    return res
}

a = swipeStr('abcd', 'acbd');
console.log(a);