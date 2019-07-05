//实现ajax工具切换的一个ajax工厂 抽象工厂，简单工厂
import Axios from "axios"

class FetchAction {
    async get(url,params){
        let res = await fetch(url);
        return await res.json()
    }
    async post(url,opts){
        console.log("fetch post")
        let res = await fetch(url,opts);
        return await res.json()
    }
    delete(){
        console.log("fetch delete")
    }
    update(){
        console.log("fetch update")
    }
}

class AxiosAction {
    async get(url){
        console.log("ax get")
        let res = await Axios.get(url)
        return res.data;
    }
    post(){
        console.log("ax post")
    }
    delete(){
        console.log("ax delete")
    }
    update(){
        console.log("ax update")
    }
}

class SuperAction {
    get(){}
    post(){}
    delete(){}
    update(){}
}

class WSAction {
    get(){}
    post(){}
    delete(){}
    update(){}
}

// fetch axios superagnet websocket
// 选择最佳方案 根据要求返回不同的实例
function ajaxFactory(name) {
    switch (name) {
        case "F":
            return new FetchAction()
            break;
        case "A":
            return new AxiosAction()
            break;
        case "S":
            return new SuperAction()
            break;
        case "W":
            return new WSAction()
            break
        default:
            return new FetchAction()
            break
    }
}


export default ajaxFactory("A")
