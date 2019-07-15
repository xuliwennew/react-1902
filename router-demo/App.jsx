import React, {Component} from "react"
import {BrowserRouter,Route,Link} from "react-router-dom"
import Page1 from "./views/Page1"
import Page2 from "./views/Page2"
import Page3 from "./views/Page3"


/**
 * BrowserRouter 用来创建一个路由对象 ，所有的路由的规则需要定义在BrowserRouter里面
 * Route 是一个路由的规则组件 path  component
 * Link  生成一个路由的标签
 */
export default class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <BrowserRouter>
                <Link to="/p1">page1</Link> || <Link to="/p2">page2</Link>
                <hr/>
                <Route path="/" exact={true} component={Page1}/>
                <Route path="/p1" component={Page1}/>
                <Route path="/p2" component={Page2}/>
                <Route path="/p3/:id" component={Page3}/>
            </BrowserRouter>
        );
    }

}
