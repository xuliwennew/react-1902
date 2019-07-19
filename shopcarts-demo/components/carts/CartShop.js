import React , {Component} from "react"
import CartShopProductList from "./CartShopProductList"


export default class CartShop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
             <CartShopProductList/>
            </div>
        );
    }

}
