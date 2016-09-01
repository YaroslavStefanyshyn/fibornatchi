// JavaScript File
var num = Number(prompt('Enter num'));

    fibonacci(num);
    
    function fibonacci(num){
    var fib = [0, 1];
    for(var i=fib.length; i<=num; i++) {
    
         fib[i] = fib[i-2] + fib[i-1];
    }
    document.write(fib[num]);
}


/*document.write(fibonacci(num))

function fibonacci(num){
   return num < 1 ? 0 
        : num <= 2 ? 1
        : fibonacci(num - 1) + fibonacci(num - 2);
}*/


