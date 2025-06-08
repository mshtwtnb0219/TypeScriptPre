// 基本的な制御構文
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
// switch分
rl.question("なんか", (name) => {
    switch (name) {
        case "greet":
            console.log("a");
            break;
        default:
            console.log("b");
    }
    rl.close();
});
// for分
for (let i = 1; i <= 100; i++) {
    //console.log(i);
}
