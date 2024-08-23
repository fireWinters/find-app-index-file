/*
 * @Author: Diana Tang
 * @Date: 2024-08-23 23:09:14
 * @LastEditors: Diana Tang
 * @Description: 选择排序
 * @FilePath: /find-app-index-file/src/app/selectionSort.js
 */
const selectionSort =(arr)=>{
    const len=arr.length;
    for (let i = 0; i < len; i++) {
        const element = array[i];
        let minindex=i;
        for(let j = 0; j < len; j++) {
            if (arr[j]<arr[minindex]) {
                minindex = j;
            }
        }
        if (minindex!==i) {
           let temp=arr[i];
           arr[i]=arr[minindex];
           arr[minindex]=temp;
        }
    }
    return arr;
}