console.log(5>'15'<5);
// 5 > '15' = 5 > 15 = true
// true < 5 = 0 < 5 = true
// true

console.log(7<'15'<7);
// 7 < '15' = 7 < 15 = true
// true < 7 = 1 < 7 = true
// true

console.log(7<'85'>5);
// 7 < '85' = 7 < 85 = false
// false > 5 = 0 > 5 = false
// false