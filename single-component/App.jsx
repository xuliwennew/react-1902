import React,{Component} from "react"
import ReactSwiper from "./views/ReactSwiper"
import UserList from "./views/UserList"
import MyList from "./components/MyList"
import ProductList from "./views/ProductList"



export default class App extends Component{
    constructor(props) {
        super(props);

    }



    render() {
        return  (
            <div>
                <ProductList/>
            </div>
        )
    }

}
