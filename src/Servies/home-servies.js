import Axios from 'axios'
import API from '@/API' 

// 数据请求
// export function getData(){
//     return new Promise((resolve,reject)=>{
//         Axios.get(传递的API,{
//             params: {
//                 传递的参数
//             }
//         }).then((res)=>{
//             //返回获取的数据
//             resolve(res)
//         })
//     }) 
// }

export function getData(){
    return new Promise((resolve,reject)=>{
        Axios.get(API.HOUSE_URL,{
            params: {
                
            }
        }).then((res)=>{
            // console.log(res)
            //返回获取的数据
            resolve(res)
        })
    }) 
}