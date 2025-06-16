// 配列
const arr = [0,2,3,4,54]
console.log(arr);
const arr2 = [arr,7]
console.log(arr2);

// インデックスのアクセス
console.log(arr[2]);

// 配列型の記法
const arr3:number[] = [1,23];
const arraaa:number[] = [12,3,4];

// readonly　配列型
const aaa1:readonly number[] = [12,3];

// pushメソッド
const arr4 = [1]
arr4.push(2)
console.log(arr4)

// for-of文によるループ
for(const elm of arr4) {
    console.log(elm)
}