// 封装API 

import axios from 'axios'








// 登录API
let loginApi = (data)=>{
	return axios.post("/login",data)
}

// 注册API 
let registAPi = (data)=>{
	return axios.post("/regist",data)
}

// 首页商品列表
let goodListAPI = ()=>{
	return axios.get("/goodlist")
}

// 获取商品详情
let goodDetailAPI = (goodid)=>{
	return axios.get("/gooddetail",{
		params: {
		    id: goodid
		}
	})
}

export {
loginApi,
registAPi,
goodListAPI,
goodDetailAPI,
}