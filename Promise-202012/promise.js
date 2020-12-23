//声明构造函数
function Promise(executor){
    //定义属性
    this.PromiseState='pending';
    this.PromiseResult=null;
    this.callbacks=[];

    //保存实例对象的this
    const self=this;            
    //定义resolve
    function resolve(data){
        //判断状态，使得状态只能由其他变为pending，且只能修改一次。
        if(self.PromiseState!=='pending') return ;
        //1、修改状态
        self.PromiseState='fulfilled';
        //2、修改对象的结果值
        self.PromiseResult=data;
        //3、异步任务处理，执行then的成功回调
        //3.1单个回调
       /*  if(self.callback.onResolved){           
            self.callback.onResolved(data);
        } */
        //3.2 多个回调
        self.callbacks.forEach(item => {
            item.onResolved(data);
        });
    }
    //定义reject
    function reject(data){
        if(self.PromiseState!=='pending') return ;
        //1、修改状态
        self.PromiseState="rejected"
        //2、修改对象的结果值
        self.PromiseResult=data;
        //3、异步任务处理，执行then的失败回调
        /* if(self.callbacks.onRejected){           //如果callback中有成功回调，就执行。
            self.callback.onRejected(data);
        } */
        self.callbacks.forEach(item => {
            item.onRejected(data);
        });
    }
    //对throw 抛出错误进行处理
    try{
        //同步调用【执行器函数】
        executor(resolve,reject);
    }catch(e){
        //修改promise状态
        reject(e);
    }
}

//pending判断是对异步任务进行处理，其他则是对同步任务处理。

Promise.prototype.then=function(onResolved,onRejected){
    const self=this;
    return new Promise((resolve,reject)=>{
        function callback(type){
            try{
                //获取回调函数执行结果
                let result = type(self.PromiseResult);
                //判断结果类型
                if(result instanceof Promise){  
                    result.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    })
                }else{ 
                    //结果类型未非Promise对象时，状态【成功】。
                    resolve(result);
                }
            }catch(e){
                reject(e);      //将异常值返回为一个失败状态的promise
            }
        }
        if(this.PromiseState==='fulfilled'){
            callback(onResolved);
        }

        if(this.PromiseState==='rejected'){
            callback(onRejected);
        }

        if(this.PromiseState==='pending'){
            //将每个次异步任务的成功和失败的处理回调，存入promise实例的callbacks
            this.callbacks.push({
                onResolved:function(){
                    callback(onResolved);
                },
                onRejected:function(){
                    callback(onRejected);
                }
            });
        }
    })
    
}