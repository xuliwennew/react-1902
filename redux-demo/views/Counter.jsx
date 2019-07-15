import React, {Component} from "react"
import store from "../store"



export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:store.getState().num
        }
        this.update = this.update.bind(this)
    }

    update(){
        // let {num} = this.state;
        // this.setState({
        //     num: ++num
        // })
        store.dispatch({type:"ADD"})
    }

    //订阅store的变化
    componentDidMount(){
        store.subscribe(()=>{
            console.log("store变化了，修改组件的内容。。。。")
            this.setState({
                num: store.getState().num
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.update}>+</button>
            </div>
        );
    }

}
