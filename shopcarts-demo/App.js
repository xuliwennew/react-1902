import React , {Component} from "react"
import Carts from "./views/Carts"


export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
              <Carts/>
            </div>
        );
    }

}
