import React, {Component} from "react"



export default class Page3 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        //params props props=true
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>Page3 : {this.props.match.params.id}</h1>
            </div>
        );
    }

}
