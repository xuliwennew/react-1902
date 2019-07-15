import React, {Component} from "react"
import {Link} from "react-router-dom"


export default class Page2 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h1>Page2</h1>
                <Link to={"/p3/1"}>go page3</Link>
            </div>
        );
    }

}
