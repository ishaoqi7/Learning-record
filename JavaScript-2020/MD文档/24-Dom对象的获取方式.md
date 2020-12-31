## 获取DOM元素的方法
>
    /* 
    document.getElementById();              //指定在《文档》中，基于元素的ID或者这个元素对象
    [context].getElementsByTagName();       //在指定《上下文容器》冲中，通过标签名获取一组《元素集合》
    [context].getElementsByClassName();     //在指定《上下文》中，通过样式类名获取一组元素集合（不兼容E6-8）
    document.getElementsByName();           //在整个《文档》中，通过标签的NAME属性值获取一组《节点集合》（在IE中只有表单元素的NAME才能识别，所以我们一般只应用于表单元素的处理）

    document.head               //取页面中的HEAD
    document.body               //取页面中的BODY
    document.documentElement    //取页面中的HTML

    [context].querySelector([selector]);          //在指定上下文中，通过选择器获取指定的《元素对象》

    [context].querySelectorAll([selector]);       //在指定上下文中，通过选择器获取指定的《元素集合》 
    */

```html
    <div class="tabBox" id="tabBox">
        <ul class="tab" id="tab">
            <li>第一个页卡</li>
            <li>第二个页卡</li>
            <li>第三个页卡</li>
        </ul>
        <!-- 这是一个注释 -->
        <div>
            第一个展示内容
            <ul class="news1"></ul>
        </div>
            第二个展示内容
            <div>
            <ul class="news2"></ul>
        </div>
            第三个展示内容
            <div>
            <ul class="news3"></ul>
        </div>
    </div>
```
### 1、获取为元素集合时，注意：HTMLCollection(n)。
> 即使只有一个元素时，也需用 集合[0]的方式，才能使用
```javascript
    let tab=document.getElementById('tab');
    console.log(tab);                               //<ul>.....</ul>

    let tabBox=document.getElementsByClassName('tabBox');
    console.log(tabBox);                         //HTMLCollection [div#tabBox.tabBox, tabBox: div#tabBox.tabBox]
    console.log(tabBox.style);                   //undefined
    console.log(tabBox[0].style);                //CSSStyleDeclaration {alignmentBaseline: "", all: "", …}
   
    let liList=tab.getElementsByTagName('li');      //HTMLCollection(3)  元素集合   
    console.log(liList[0]);                         //第一个元素
```

### 2、获取元素querySelecteor()/querySelectorAll()
> 里面可以写选择语法

```javascript
    let navList1=document.querySelector('.tab li');         //只能获取到第一个li标签
    let navList2=document.querySelectorAll('.tab li');      //NodeList(3) [li, li, li]     元素集合
    let navList3=document.querySelectorAll('.tabBox>ul');   //NodeList [ul#tab.tab]     元素集合
    console.log(navList1);
    console.log(navList2);
    console.log(navList3);
```

