## 函数属性arguments
> arguments:函数内置的实参集合
>     1.类数组集合，集合中存储着所有函数执行时，传递的实参信息
>     2.不论是否设置形参,arguments都存在
>     3.不论是否传递实参,arguments也都存在
>     arguments.callee:存储的是当前函数本身（一般不用的，JS严格模式下禁止使用这些属性）

> 无形参
```javascript
	 function sum1(){
            console.log(arguments);
        }
     sum1(11,14,51,54,31,14);
```

> 求实参和
```javascript
function sum(){
            let totle=null;
            for(let i=0;i<arguments.length;i++){
                // 获取的每一项都先转换成数字
                let item=Number(arguments[i]);      
                //非有效数字，则结束当前循环
                if(isNaN(item)){                     
                    continue;
                }
                totle+=item;            
            }
           return totle;                     
        }

        console.log(sum(10,12,14,143,"sdda",'12'));     //191
```
