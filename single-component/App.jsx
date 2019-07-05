import React,{Component} from "react"
import ReactSwiper from "./views/ReactSwiper"
import UserList from "./views/UserList"
import MyList from "./components/MyList"




export default class App extends Component{
    constructor(props) {
        super(props);

    }



    render() {
        return  (
            <div>
                <MyList/>
            </div>
        )
    }

}
