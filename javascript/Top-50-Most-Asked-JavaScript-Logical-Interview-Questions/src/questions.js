const questions = [];

questions.push(() => {
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
});

questions.push(() => {
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
});

questions.push(() => {
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
});

questions.push(() => {
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
});

questions.push(() => {
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
});

questions.push(() => {
  console.log(["a"] + ["b"]);

  console.log([] + []);

  console.log(![]);

  console.log(![] + []);

  // output will be
  // ab
  // ''
  // false
  // false
});

questions.push(() => {
  console.log(3 < 4 < 5);
  console.log(3 > 4 > 5);
  console.log(3 > 4 > -1);

  // output will be
  // true
  // false
  // true
});

questions.push(() => {
  const x1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
  });

  const x2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "two");
  });

  Promise.all([x1, x2]).then((resolve) => {
    console.log(resolve);
  });

  Promise.race([x1, x2]).then((resolve) => {
    console.log(resolve);
  });

  // output will be
  // two
  // [ 'one', 'two' ]
});

questions.push(() => {
  const a = {};
  const b = { key: "b" };
  const c = { key: "c" };
  const d = b;

  a[b] = 143;
  a[c] = 286;

  console.log(a[b]);
  console.log(b.toString());
  console.log(a[d]);
  console.log(JSON.stringify(a, null, 2));

  // ouput will be
  //   286
  //   [object Object]
  //   286
  //   {
  //     "[object Object]": 286
  //   }
});

questions.push(() => {
  const h1 = { h: "Thor", i: "IM" };
  const h2 = { h: "Thor", i: "IM" };
  const h3 = h2;
  console.log(h1 == h2);
  console.log(h1 === h2);
  console.log(h2 == h3);
  console.log(h2 === h3);

  // output will be
  //   false
  //   false
  //   true
  //   true
});

questions.push(() => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  const array3 = array2;

  console.log(array1 === array2);
  console.log(array2 === array3);

  const User = function (name) {
    this.name = name;
  };

  const user1 = new User("Rowdy");
  const user2 = new User("Rowdy");
  console.log(user1 === user2);

  // output will be
  //   false
  //   true
  //   false
});

questions.push(() => {
  console.log((1 && 2) || 0 || 3);

  console.log(null && undefined);

  console.log(undefined && null);

  console.log(0 || (1 && 2) || 3);

  console.log(null || (2 && 3) || 4);

  // output will be
  //   2
  //   null
  //   undefined
  //   2
  //   3
});

questions.push(() => {
  console.log("goog" > "bad");
  // 'g' > 'b'

  console.log("Like" < "like");

  console.log("Subscribe" > "Subg");

  console.log("SubScribe" > "Subg");

  // output will be
  //   true
  //   true
  //   true
  //   false
});

questions.push(() => {
  console.log("9" > "11");

  console.log("9" > 11);

  console.log("" > -1);

  console.log("Rowdy" > 1);

  // output will be
  //   true
  //   false
  //   true
  //   false
});

const question0015 = () => {};

module.exports = questions;
