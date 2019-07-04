import React,{Component} from "react"
import ReactSwiper from "./views/ReactSwiper"





export default class App extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return  <div>
            <ReactSwiper/>
            <ReactSwiper/>
            <ReactSwiper/>
            <ReactSwiper/>
        </div>
    }

}
