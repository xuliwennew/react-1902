import {createStore} from "redux"


/**
 * 使用步骤
 1. npm install redux react-redux(vuex) middleware
 2. 初始化共享的状态（state），以及添加修改状态的规则(reducer)
 3. 根据上面创建的状态，和规则来，创建一个store模块，createStore
 4. 在组件中绑定store 的状态 store.getState()
    修改store中的状态，store.dispatch({type:"ADD"}) 传入到reducer中
    需要在组件的mounted中订阅 store的变化，自己更新页面
 **/


//定义一个需要共享的状态 num
let initState = {
    num:1
}


//创建一个针对共享状态的修改规则 reducer
// state 指向 initState, action 是组件dispatch发送过来的动作类型 { type :"ADD"}
let reducer = (state,action)=>{
    let {num} = state;
   switch (action.type) {
       case "ADD":
           console.log("收到:"+action.type)
           return {num:++num} //返回新的状态
           break;
       case "MINUS":
           return {num:--num}
           break;
       default:
           return state;
           break
   }
}


//根据state,和reducer来创建一个store
let store = createStore(reducer,initState)


export default store
