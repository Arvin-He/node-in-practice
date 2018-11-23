// 学习使用测试框架 mocha : http://mochajs.org/
// 学习使用断言库 should : https://github.com/tj/should.js
// 学习使用测试率覆盖工具 istanbul : https://github.com/gotwarlost/istanbul
// 简单 Makefile 的编写 : http://blog.csdn.net/haoel/article/details/2886

var fibonacci = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

if (require.main === module) {
    var n = Number(process.argv[2])
    console.log('fibonacci(' + n +') is', fibonacci(n))
}