import React,{Component} from "react"
import ProductTitle from "./ProductTitle"


export default class Product extends  Component{
    constructor(props) {
        super(props);

    }


    render() {
        let {data} = this.props
        return (
            <li>
               <ProductTitle title={data.title}/>
            </li>
        );
    }

}
