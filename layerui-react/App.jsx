import React,{PureComponent} from "react"
import Main from "./views/Main";


export default class App extends PureComponent{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
              <Main/>
            </div>
        );
    }

}
