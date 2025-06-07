TypeScriptの環境構築  

・package.jsonのインストール
npm init --yes

・パッケージのインストール
npm install --save-dev typescript @types/node  

・コンパイル
npx tsc
npx tsc --watch  
 ⇒　src配下のプログラムが保存したタイミングでコンパイルされる

 ・トラスコンパイルされたjsを実行
 　node　対象のjsファイル  
