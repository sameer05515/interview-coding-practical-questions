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

const question0004 = () => {
  for (var i = 0; i < 4; i++) {
    console.log(i);
  }
  console.log("-----------------------");
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

  // output will be
  // 0
  // 1
  // 2
  // 3
  // -----------------------
  // 0
  // 1
  // 2
  // 3
};

const question0005 = () => {
  for (var i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, 500);
  }
  console.log("-----------------------");
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, 7000);
  }

  console.log("-----------------------");
  for (var i = 0; i < 4; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, 14000);
    })(i);
  }

  // Explaination:
  // var is function-scoped, while let is block-scoped
  // after 500 ms, var i will have value 4, so settimeout callback will print this 4 , 4-times
  //

  // output will be
  //   -----------------------
  //   -----------------------
  //   4
  //   4
  //   4
  //   4
  //   0
  //   1
  //   2
  //   3
  //   0
  //   1
  //   2
  //   3
};

const question0006 = () => {
  console.log(["a"] + ["b"]);

  console.log([] + []);

  console.log(![]);

  console.log(![] + []);

  // output will be
  // ab
  // ''
  // false
  // false
};

const question0007 = () => {
  console.log(3 < 4 < 5);
  console.log(3 > 4 > 5);
  console.log(3 > 4 > -1);

  // output will be
  // true
  // false
  // true
};

const questions = [
  question0001,
  question0002,
  question0003,
  question0004,
  question0005,
  question0006,
  question0007,
];

module.exports = questions;
