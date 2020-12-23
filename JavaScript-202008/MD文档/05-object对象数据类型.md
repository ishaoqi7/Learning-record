## 一、object对象数据类型-普通对象
> {[key]:[value],···} 任何一个对象都是由零到多组键值对(key:value)组成。

> 属性名只能是字符串或数字，并且属性名不能重复。

### 1、获取属性名对应的属性值
> 属性名不存在时默认值为undefined
- =>对象[属性名]        : 属性名是数字或字符串
- =>对象.属性名         : 属性名是数字时不能使用.的方式
```javascript
   let person ={
           name:'zhangsan',
           age:40,
           height:'180cm',
           weight:'80kg',
           1:100
       } 
    
    console.log(person.name);
    console.log(person['age']);      //是字符串时，要加引号
    console.log(person.sex);         //undefined
    console.log(person[1]);          //是字符串时，要加引号
```
### 2、删除属性
- 假删除:属性还在，值为空  
```javascript
 person.age=null;     //undefined也行，不过一般用null
```
- 真删除：把属性彻底删除    
```javascript
 delete person[1];    // true/false
```

## 二、特殊对象：数组
> 我们在中括号中设置的是属性值，它的属性名是默认生成的数字。我们称其为“索引”，从0开始，连续递增，而且数字代表每一项的位置。

> 拥有默认属性名 length，存储数组长度。 //arr.length  / arr['length']
```javascript
       let arry=[12,'哈哈',true,23];
       
       console.log(arry.length);            //4
       console.log(arry['length']);         //4
       console.log(arry[2]);                //true
       console.log(arry[arry.length-1]);      //23

```
### 新添属性值
> 向数组末尾追加内容
```javascript
    arry[arry.length]=100;
```