console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000);

setTimeout(() => {
    console.log(3);
}, 0);

console.log(4);


// output will be
// 1
// 4
// 3
// 2