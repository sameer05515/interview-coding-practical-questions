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

questions.push(() => {
  const val = 5.51;
  console.log(Math.round(val));
  console.log(Math.round(0 - val));

  console.log(Math.floor(val));
  console.log(Math.floor(0 - val));

  console.log(Math.ceil(val));
  console.log(Math.ceil(0 - val));

  console.log(Math.abs(val));
  console.log(Math.abs(0 - val));

  // output will be
  // 6
  // -6
  // 5
  // -6
  // 6
  // -5
  // 5.51
  // 5.51
});

questions.push(() => {
  function Name() {
    return;
    {
      mes: "Javascript";
    }
  }
  console.log(Name());

  function caName() {
    return {
      mes: "Javascript",
    };
  }
  console.log(caName());

  // output will be
  //   undefined
  //   { mes: 'Javascript' }
});

questions.push(() => {
  var array = [1, 2, 3, 4, 5];
  console.log(array.length); //5

  array.length = 3;

  console.log(array.length); //3
  console.log(array); //[1,2,3]

  delete array[0];

  console.log(array);
  console.log(array[0]);
  console.log(array.length);

  // output will be
  // 5
  // 3
  // [ 1, 2, 3 ]
  // [ <1 empty item>, 2, 3 ]
  // undefined
  // 3
});

questions.push(() => {
  const arr = [1, 2, 3];
  const str = "1,2,3";

  console.log(arr == str);
  console.log(arr === str);

  // output will be
  // true
  // false
});

questions.push(() => {
  console.log(3 + 3 + "3" + 3 + 3);

  console.log(1 + 2 + 3 + 4 + 5 + "6");

  //output will be
  //   6333
  //   156
});

questions.push(() => {
  var arr1 = [
    [1, 2],
    [2, 4],
    [4, 8],
  ];

  var arr2 = [...arr1];

  arr1[0][1] = "1";
  arr1[0][0] = "0";
  arr1[1] = 33;
  arr1[0] = 22;
  console.log(arr1);
  console.log(arr2);

  // output will be
  // [ 22, 33, [ 4, 8 ] ]
  // [ [ '0', '1' ], [ 2, 4 ], [ 4, 8 ] ]
});

questions.push(() => {
  var testArrowFn = {
    name: "abc",
    foo: () => {
      console.log(this.name);
    },
  };

  var output = testArrowFn.foo;
  output();
  testArrowFn.foo();

  var testFn = {
    name: "abc",
    foo: function () {
      console.log(this.name);
    },
  };

  var output = testFn.foo;
  output();
  testFn.foo();

  // output will be
  // undefined
  // undefined
  // undefined
  // abc
});

questions.push(() => {
  console.log(0.1 + 0.2 == 0.3);
  console.log(0.3 + 0.6 == 0.9);

  console.log(0.1 + 0.2);
  console.log(0.3 + 0.6);

  // output will be
  // false
  // false
  // 0.30000000000000004
  // 0.8999999999999999
});

questions.push(() => {
  console.log("first");

  setTimeout(() => {
    console.log("second");
  });

  queueMicrotask(() => {
    console.log("third");
  });

  // output will be
  // first
  // third
  // second
});

questions.push(() => {
  console.log(num);
  var num;
  num = 6;
  console.log(num);

  numb = 7;
  console.log(numb);
  let numb;

  //output will be
  // undefined
  // 6
  // D:\GIT\interview-coding-practical-questions\javascript\Top-50-Most-Asked-JavaScript-Logical-Interview-Questions\src\questions.js:474
  //     numb=7;
  //         ^

  // ReferenceError: Cannot access 'numb' before initialization
  //     at D:\GIT\interview-coding-practical-questions\javascript\Top-50-Most-Asked-JavaScript-Logical-Interview-Questions\src\questions.js:474:9
  //     at D:\GIT\interview-coding-practical-questions\javascript\Top-50-Most-Asked-JavaScript-Logical-Interview-Questions\src\index.js:10:9
  //     at Array.forEach (<anonymous>)
  //     at Object.<anonymous> (D:\GIT\interview-coding-practical-questions\javascript\Top-50-Most-Asked-JavaScript-Logical-Interview-Questions\src\index.js:7:6)
  //     at Module._compile (node:internal/modules/cjs/loader:1358:14)
  //     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
  //     at Module.load (node:internal/modules/cjs/loader:1208:32)
  //     at Module._load (node:internal/modules/cjs/loader:1024:12)
  //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
  //     at node:internal/main/run_main_module:28:49
});

questions.push(() => {
  function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = myGenerator();

  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());

  // output will be
  // { value: 1, done: false }
  // { value: 2, done: false }
  // { value: 3, done: false }
  // { value: undefined, done: true }
});

module.exports = questions;
