/* 
apply() 方法调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
apply() = 立即执行函数 + 指定 this + 把参数装进一个数组传给函数
apply() 可以理解成是 call() 的“数组版兄弟”。
它们俩几乎一模一样，唯一的区别就是传参方式不同：

call()：参数一个个单独写（像正常调用函数那样）
apply()：参数必须打包成一个数组（或类数组对象）一次性传进去

语法
    fun.apply(thisArg, [argsArray])
    这里的apply就相当于调用fun，同时指定了fun函数的this和参数。
参数
    thisArg
        在 fun 函数运行时使用的 this 值,就是指定fun函数调用时的this。注意：thisArg 仅在非严格模式下被自动转换为对象（null 或 undefined 会被转换为全局对象）。在严格模式下，thisArg 不会被自动转换为对象。如果 thisArg 是一个原始值，则会被包装成对应的对象。
    argsArray
        一个数组或者类数组对象，指定 fun 函数调用时传入的参数。
返回值
    fun 函数的返回值。
因而可以用Array.prototype.concat.apply([], arrayLike)来将一个类数组对象转换成一个数组。
*/
function introduce(age, job) {
    console.log(`我是 ${this.name}，今年 ${age} 岁，职业是 ${job}`);
}
const person = { name: "小明" };
introduce.call(person, 28, "前端工程师");
introduce.apply(person, [28, "前端工程师"]);
// → 完全一样的结果

/* 
bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的预设参数，供调用时使用。
在js中，一般函数的 this 是在调用时绑定的，而 bind() 方法允许我们创建一个新的函数，并将 this 绑定到指定的对象上。这个新函数可以在任何时候被调用，并且它的 this 将始终指向我们指定的对象。除非我们使用 new 关键字调用这个新函数，否则它将无法被构造。
语法
    fun.bind(thisArg[, arg1[, arg2[, ...]]])
参数
    thisArg
        当返回的函数被调用时，作为 this 传递给它的值。使用 bind() 创建的函数是不可构造的。
    arg1, arg2, ...
        当返回的函数被调用时，这些参数将会在传入的参数前传入。
返回值
    一个函数，当被调用时，具有指定的 this 值和初始参数。
*/
const obj = { name: "小明" };

function say() {
    console.log(this.name);
}

const boundSay = say.bind(obj);   // ← 这里开始“焊死”
boundSay();                    // 小明
setTimeout(boundSay, 0);       // 小明
button.onclick = boundSay;     // 小明（不会变成 button）
boundSay.call({ name: "大红" });  // 还是 小明！（call 也改不了）