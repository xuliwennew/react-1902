import React, {Component} from "react"
import Counter from "./views/Counter"



export default class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }

}
