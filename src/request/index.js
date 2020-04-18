function ajax(url){
	return new Promise((resolve,reject)=>{
		let xml = require("xmlhttprequest").XMLHttpRequest;
		xml.onreadystatechange = function(){
			if(xml.readyState == 4){
				if((xml.status >= 200 && xml.status < 300) || xml.status == 304){
					resolve(this.response);
				}else{
					reject('加载失败')
				}
			}
		}
		xml.open('GET',url)
		xml.send(null);
	})
}

ajax('').then(res=>{
	console.log(res)
},req=>{
	console.log(req)
})