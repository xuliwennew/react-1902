

import React ,{Component} from "react"
import "./loading.css"


export default class LoadingMore extends Component{

    render() {
        return (
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        );
    }
}
