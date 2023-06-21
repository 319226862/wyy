// 请你编写并返回一个 计数器 函数，
// 它接收一个整型参数 n 。
// 这个 计数器 函数最初返回 n，、
// 每次调用它时返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。


/**
 * @param {number} n
 * @return {Function} counter
 */
// 闭包
var createCounter = function(n) {
    return function() {
        return n++
    };
};
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */