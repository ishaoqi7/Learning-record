## boolean布尔数据类型
> 0、空字符串（'' | "",中间有空格的情况 ' ' ,不是空字符串)、undefined、null、NaN转换成bool类型为false；其余任意都为true。（而且没有任何特俗情况）

### 一、转换成布尔类型方法：
####  1、Boolean([val])
```javascript
    console.log(Boolean(0));        //false
    console.log(Boolean(''));       //false
    console.log(Boolean(' '));      //true
    console.log(Boolean(null));     //false
    console.log(Boolean(NaN));      //false
    console.log(Boolean(undefined));    //false
    console.log(Boolean([]));       //true
    console.log(Boolean([12]));     //true
```
####  2、 ! / !!
> !: 取反（先转为布尔类型，再取反）

> !!:取反再取反（只相当于转换为布尔类型）

####  3、 条件判断 如：if()
> 如果条件只是一个值，不是==/！=/<=/>=等比较，就是先把值转换为bool类型，然后验证真假。
```javascript
        if(!1){
            console.log(1);     
        }else{
            console.log(2);     //2
        }

        if(!NaN){
            console.log(NaN);   //NaN
        }

        if('3px'-3){            //=>NaN-3=>NaN
            console.log(1);       
        }
```