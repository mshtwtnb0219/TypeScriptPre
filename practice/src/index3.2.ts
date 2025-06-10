// オブジェクトの型

// オブジェクトリテラル
const obj = {
    foo:123,
    bar:"aaa"
};

// オブジェクト型
// 
const obj1: {
    foo:number;
    bar:string;
} = {
    foo:122,
    bar:"a"
}

// type文
// type 型名　＝　型; 👈これ良く使うらしい
type FooBarObj = {
    foo:number;
    bar:string;
};
// ⇒ FooBarObj型となる
const obj12:FooBarObj = {
    foo:123,
    bar:"aaa"
}

// interface宣言
// 型名を新規作成する 👈これはあまり使わない　type文のが主流
interface Foo {
    foo:number;
    bar:string;
};

const tst:Foo = {
    foo:123,
    bar:"a"
}

// 任意のプロパティ名を許容する型　インデックスシグネチャ
type PriceData = {
    [key:string]:number;
}
const data:PriceData ={
    apple:220,
    cofee:122
}
data.aaa = 222;

console.log(data.aaa);

// オプショナルなプロパティの宣言
// あってなもなくてもいいプロパティを宣言
type MyObj = {
    foo:number;
    baz?:number;
}
const aaa:MyObj = {
    foo:123
}

// typeof キーワードで変数の型を得る
// オブジェクト型の再利用
const obj123 = {
    foo:123,
    sss:"11"
}
// ⇒型の再利用ができる
type test = typeof obj123;
const wswww:test = {
    foo:134,
    sss:"afefe"
}