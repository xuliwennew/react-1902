import React,{Component} from "react"
import ProductContext from "../../contexts/ProductContext"


export default class ProductTitle extends  Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
          <ProductContext.Consumer>
              {
                 data => <div>
                     <h1>{data.title}</h1>
                     <h1>{this.props.title}</h1>
                 </div>
              }
          </ProductContext.Consumer>
        );
    }

}
