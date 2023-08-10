## js

## es6

### 三个连续的点（...）被称为扩展运算符（spread operator）和剩余运算符（rest operator）

#### 用途

1. 扩展运算符:扩展运算符用于数组或对象中展开元素,可以在函数调用,数组字面量,对象字面量等地方使用

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // 在新数组中展开arr并添加额外的元素
console.log(newArr); // 输出: [1, 2, 3, 4, 5]

const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // 在新对象中展开obj并添加额外的键值对
console.log(newObj); // 输出: { a: 1, b: 2, c: 3 }
```

2. 剩余运算符:剩余运算符也使用三个点,但是它的作用是将一组参数或数组中的剩余元素收集到一个数组中.通常用于函数参数中,可以处理可变数量的参数

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 输出: 10，将所有参数相加
```
