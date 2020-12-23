## String字符串数据类型
>所有用单引号、双引号、反引号包起来的都是字符串。

### 1、其它类型转换成字符串
- [val].toString()
    - 非实例不能直接，如直接数字12.toString()，需要()包裹
    ```javascript
        let a=12;
        console.log(a.toString());        //'12'
        console.log((NaN).toString());    //'NaN'
        console.log(true.toString());    //'true'
        console.log(false.toString());    //'false'
    ```
    - null\undefinde禁止直接toString()
    ```javascript
        console.log((null).toString());    //报错
    ```
    - 数组对象转换成字符串
    ```javascript
        console.log([].toString());         //''
        console.log([12].toString());       //'12'
        console.log([12,13].toString());    //'12,13'
    ```    
    - 正则对象
     ```javascript
        console.log((/^$/).toString());     //'/^$/'
    ```
    - 普通对象.toString()的结果是"[object,object]"
    > Object.prototype.toString的方法不是转换为字符串，而是用来检验数据类型
    ```javascript
        console.log({}.toString());             //[object Object]
        console.log({name:"12"}.toString());    //[object Object]
    ```
- 字符串拼接
    > 四则运算中，除加法之外，其余都是数学计算。只有加法可能存在字符串拼接（一旦遇到字符串，就做字符串拼接）。
    ```javascript
        console.log('12'+10);       //1210
        console.log('10'-10);       //0
        console.log('10px'-10);     //NaN
    ```

### 2、练习题
```javascript
    let b=10+null+true+[]+undefined+'珠峰'+null+[]+10+false;
    console.log(b);                  // 11undefined珠峰null10false
```
```javascript
    let c = 100+true+21.2+undefined+'tencent'+[]+null+9+false;
    console.log(c);     //'NaNtencentnull9false'
```
> 解题步骤
```javascript
    => 10 + null => 10 + 0 => 10
    => 10 + true => 10 + 1 => 11
    => 11 + []=>11 + '' => '11'    //在[]转换成数字过程中，先转化成字符串。+遇到字符串直接就做拼接
    => 之后全是字符串拼接。
```
