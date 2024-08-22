/*
 * @Author: Diana Tang
 * @Date: 2024-08-22 19:57:33
 * @LastEditors: Diana Tang
 * @Description: 用JavaScript实现冒泡排序
 * @FilePath: /find-app-index-file/src/app/tpx.js
 */

const bubbleSort=(arr)=>{
let n=arr.length;
for (let index = 0; index < n-1; index++) {
    for (let j = 0; j < n-i; j++) {
        if (arr[j]>arr[j+1]) {
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
        
    }
    return arr;
}
}
// 优化后的算法
const newBubbles=()=>{
    let n=arr.length;
    let swapped;
    for (let i = 0; i < n-1; i++) {
        swapped = false;
        for (let j = 0; j <n-1-i;j++){
            if (arr[j]>arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                swapped = true;
                
            }
        }
        if (!swapped) {
            break; //如果元素没有交换，就退出循环
        }
    }
    return arr;
}