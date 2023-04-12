import axios from 'axios'
import {showDialog} from 'vant'

const instance = axios.create({
    baseURL:'/api',
})

instance.interceptors.response.use((res)=>{
    const {data:_data} = res
    const {code,msg,data} = _data
    if(code!==0){
        showDialog({
            message:msg,
            confirmButtonColor:'red'
        })
        return Promise.reject(msg)
    }
    return data
},(err)=>{
    console.log(err.message)
})

export default instance