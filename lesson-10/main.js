var parent = function() {
    var name = "parent_name"
    var age = 33

    var child = function () {
        var name = "child_name"
        var childAge = 13
        console.log(name, age, childAge)
    }

    child()
    // will throw Error
    // ReferenceError: childAge is not defined
    // console.log(name, age, childAge)
}

parent()

// 闭包
for (var i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 5)
}

// setTimeout 中的 i 是对外层 i 的引用。
// 当 setTimeout 的代码被解释的时候，运行时只是记录了 i 的引用，而不是值。
// 而当 setTimeout 被触发时，五个 setTimeout 中的 i 同时被取值，
// 由于它们都指向了外层的同一个 i，而那个 i 的值在迭代完成时为 5，所以打印了五次 5。

// this ; 在函数执行时，this 总是指向调用该函数的对象。要判断 this 的指向，其实就是判断 this 所在的函数属于谁。


// 函数有所属对象时：指向所属对象
var myObject = {value:100}
myObject.getValue = function () {
    console.log(this.value)
    console.log(this)
    return this.value
}

console.log(myObject.getValue())


// 函数没有所属对象：指向全局对象
var myObject = {value:100}

myObject.getValue = function () {
    var foo = function() {
        console.log(this.value) // => undefined
        console.log(this) // 输出全局对象 global
    }
    foo()
    return this.value
}

console.log(myObject.getValue()) // => 100

// foo 函数虽然定义在 getValue 的函数体内，
// 但实际上它既不属于 getValue 也不属于 myObject。
// foo 并没有被绑定在任何对象上，所以当调用时，它的 this 指针指向了全局对象 global。



// 构造器中的 this：指向新对象
var SomeClass = function() {
    this.value = 100
}

var myCreate = new SomeClass()

console.log(myCreate.value)  // 输出100



// apply 和 call 调用以及 bind 绑定：指向绑定的对象

var myObject = {value:100}

var foo = function(){
    console.log(this)
}

foo()
foo.apply(myObject)
foo.call(myObject)


var newFoo = foo.bind(myObject)
newFoo()