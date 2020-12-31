## null/undefined
> null和undefined都代表没有。

### 1、null：空对象的引用，声明时已申请内存空间，null的值向具体存储位置。
```javascript
    let num=null;      
    let num= 0;
    //最好使用null初始赋空值，0不是空值，它在栈中已有占据存储位置。使用null性能提高一点点点点。
```
### 2、undefined：声明了一个变量但没有赋值，其默认值就位undefined。只是一个标识符。没有申请存储空间。

