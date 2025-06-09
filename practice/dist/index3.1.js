import { createInterface } from "readline";
// オブジェクト　連想配列のこと
const obj = {
    foo: 123,
    str: "aaa"
};
console.log(obj.foo);
console.log(obj.str);
// 省略も可
// const name = input?input : "nana";
// const a = {
//     name,
// }
// プロパティのアクセス
const user = {
    name: "aaaa"
};
user.name = "tttt";
console.log(user.name);
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
const mes = {
    good: "aaa",
    bad: "bbb"
};
rl.question('なんか', (line) => {
    const num = Number(line);
    console.log(mes[num >= 0 ? "good" : "bad"]);
});
