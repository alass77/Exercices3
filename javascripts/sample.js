let sum = new Function("x, y","return x + y;") 
    

// 関数呼び出し
console.log(sum(2, 3));
(function(x,y){console.log(x + y)})(2,9);