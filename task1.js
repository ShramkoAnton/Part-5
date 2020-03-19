let arr = [-1, 10, -9, 5, 6, -10];

function calcMaxSum(arr) {
    let b = 0;
    let middleware = [];
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] > 0) {
            b += arr[i];
            middleware.push(b);
            console.log(middleware);
        } else {
            b = 0;
        }
    }
    return Math.max.apply(null, middleware)
}

a = calcMaxSum(arr);
console.log(a);


// function calcMaxSum(arr) {
//     let b = 0;
//     let middleware = [];
//
//     for(let i = 0; i < arr.length; i++) {
//         while (arr[i] > 0) {
//             b += arr[i];
//             i++;
//         }
//         middleware.push(b);
//         b = 0;
//     }
//     return Math.max.apply(null, middleware)
// }

