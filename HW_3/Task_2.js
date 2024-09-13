let n = 5;
let result;
//result = Number(n + (String(n) + (String(n))) + (String(n) + String(n) + String(n)));
result = n + (Number(String(n) + (String(n)))) + Number((String(n) + String(n) + String(n)));

console.log(result)
console.log(typeof result);