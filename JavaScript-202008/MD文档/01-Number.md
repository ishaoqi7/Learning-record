## Number数字类型
>包含：常规数字、NaN、

### 1、NaN
> not a number :不是个数字，但其数据类型是Number

NaN和任何值（包括自己）都不相等:NaN!=NaN,不能用相等的方式（==）判断是否为有效数字。

### 2、isNaN 
>isNaN([val]) 检测一个值是否为非有效数字（非有效数字返回true，反之false）

在使用isNaN进行检测时，首先会验证检测的值是否为有效数字，如果不是，会给予Number()这个方法，将值转换成数字类型进行验证：

```javascript
console.log(isNaN('10'));  //false
/* 
    Number('10')=>10
    isNaN(10)=>false 
*/
```
### 3、其他数据类型转化成数字类型
- Number([val])
- paeseInt/parseFloat([val],[进制])：
> paeseInt/parseFloat转换成数字的方法。但对于字符串会从左到右依此查找有效数字，直到遇到非有效数字结束，不管后面是否有有效数字，都不再查找。
```
1、  parseInt(undefined)->parseInt('undefined')->NaN
2、  parseInt('') -> NaN                //因为没有找到有效字符
``` 


#### 3.1 字符串转换为数字
> 只要字符串中包含任意一个非有效字符(第一个点除外)，结果都是NaN。空字符串结果为0。
```javascript
console.log(Number('12.5'));        //12.5
console.log(Number('12.5px'));      //NaN
console.log(Number('12.5.5'));      //NaN
console.log(Number(''));            //0
```

#### 3.2 布尔类型转换为数字
```javascript
console.log(Number(false));     //0
console.log(Number(true));      //1
console.log(isNaN(false));      //false
```
#### 3.3 null 和 undefined 转换成数字
```javascript
console.log(Number(null));      //0
console.log(Number(undefined)); //NaN
```
#### 3.4 引用数据类型转换成数字
> 先基于toString()方法转换成字符串，然后转换成数字。
```javascript
console.log(Number({name:'10'}));      //NaN  {}|{xx:'xx'}.toString()=>"[Object,Object]"=>NaN
console.log(Number({}));               //NaN  
console.log(Number([]));               //0    [].toString()=>0
console.log(Number([12]));             //12   [12].toString()=>12
console.log(Number([12,13]));          //NaN  [12,13].toString()=>'12,13'=>NaN
```

#### 3.5 Number()与parseInt/parseFloat的区别
> Number（）使用的是浏览器底层（因为为浏览器内置对象）处理机制，即上面提到的不同类型数据的Number转换规则。
```javascript
console.log(Number(true));       //1
console.log(parseInt(true));     //NaN
```