const question0001 = () => {
    console.log(5 > "15" < 5);
    // 5 > '15' = 5 > 15 = true
    // true < 5 = 0 < 5 = true
    // true

    console.log(7 < "15" < 7);
    // 7 < '15' = 7 < 15 = true
    // true < 7 = 1 < 7 = true
    // true

    console.log(7 < "85" > 5);
    // 7 < '85' = 7 < 85 = false
    // false > 5 = 0 > 5 = false
    // false
};

const question0002 = () => {
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
};

const question0003 = () => {
    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 1000);

    setTimeout(() => {
        console.log(3);
    }, 0);

    Promise.resolve(1).then(function resolve() {
        setTimeout(() => {
            console.log(4);
        }, 0);
    });

    // Output will be 
    // 1
    // 3
    // 4
    // 2

    // Note: Promises will have higher priority than setTimeout
    // Note: Promises will be pushed to micro-queue
};

const questions = [question0001, question0002, question0003];

module.exports = questions;
