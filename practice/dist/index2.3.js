import { createInterface } from "readline";
// プリミティブ型
const w1 = 5;
const w2 = 3;
// number型は整数と小数を一緒くたにする
const h1 = 3;
const area = (w1 + w2) * h1 / 2;
console.log(area);
// BigInt　任意制度整数
// BigIntとnumber型同士では計算はできない
const b1 = (123n + 123n);
console.log(b1);
// テンプレートリテラル
// 変数の埋め込み
const str1 = "aaaaa";
console.log(`${str1}`);
// 真偽値
const no = false;
const yes = true;
console.log(no, yes);
// null undefined
const n = null;
const u = undefined;
console.log(n, u);
// プリミティブ型同士の暗黙変換
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('文字列を入力してください', (line) => {
    const re = line + 1000;
    console.log(re);
    console.log(`${line}が入力されました`);
    rl.close();
});
