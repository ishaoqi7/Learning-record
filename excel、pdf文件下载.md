## 一、下载为excel
> 将数据以excel格式导出

```javascript
$this.$axios({method:'post', url:'/Applicant/GetDateExcel', data: data, responseType:'blob'}).then((res) => {       //注意设置返回值类型
      if(res.status == 200){
        $this.loading = false;
        $this.loadingText = '拼命加载中'
        let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })  // 创建Blob对象，设置文件类型
        let objectUrl = URL.createObjectURL(blob)  // 创建URL
        link.href = objectUrl
        link.setAttribute('download', '人才资料' + '.xlsx');
        document.body.appendChild(link);
        link.click() // 下载文件
        document.body.removeChild(link); //下载完成移除元素
        URL.revokeObjectURL(objectUrl);  // 释放内存
      } else {
        this.$message.error(res.data.Message);
      }
    }).catch(err => console.log(err));
```
## 二、打印为PDF，下载

```javascript
const link = document.createElement('a')
      $this.$axios.post('/Export/EntryExport', data, {responseType: 'arraybuffer'}).then(res => {     //注意设置返回值类型
        if(res.status == 200){
          $this.loading = false;
          $this.loadingText = '拼命加载中'
          // 创建Blob对象，设置文件类型
          let blob = new Blob([res.data], { type: 'application/pdf' })
          let objectUrl = URL.createObjectURL(blob) // 创建URL
          window.open(objectUrl);
          link.href = objectUrl
          link.download = loadName // 自定义文件名
          document.body.appendChild(link);
          link.click() // 下载文件
          document.body.removeChild(link); //下载完成移除元素
          URL.revokeObjectURL(objectUrl); // 释放内存
        }
      }).catch(err => console.log(err));
```