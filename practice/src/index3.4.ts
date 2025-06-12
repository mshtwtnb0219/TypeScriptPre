// 型引数を持つ型
type User<T> = {
    name:string;
    child:T;
}

type Familiy<P,C> ={
    m:P;
    f:P;
    c:C;
}

const obj1234:Familiy<number,string> = {
    m: 0,
    f: 0,
    c: "aaa"

}

// 部分型関係による型引数の制約
// 型引数の後ろにextendsを追加する
type HasName = {
    name:string;
}

type fa<P extends HasName,C extends HasName> = {
    m:P;
    f:P;
    c:C;
}