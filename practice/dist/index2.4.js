import { createInterface } from "readline";
// 演算子
const str = '123';
// +演算子を使うことで文字列から数値型に暗黙変換ができる
console.log(+str * 2);
// 比較演算子
const str1 = "3";
// この場合はture
console.log(str1 == 3);
// false
console.log(str1 === 3);
// 論理論理演算子　短縮系
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
// nameが空の場合んに名無しが返却される
// rl.question('入力してください',(name) => {
//     const dispName = name || "名無し";
//     console.log(dispName);
//     rl.close();
// })
// 条件演算時　
// 条件式？真のときの式：偽のときの式
rl.question('入力してください', (line) => {
    const num = Number(line);
    const message = 0 <= num && num < 100
        ? "a"
        : "b";
    console.log(message);
    rl.close();
});
