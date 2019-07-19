import React , {Component} from "react"
import CartShopProduct from "./CartShopProduct"
import CartShopList from "./CartShopList";


export default class CartShopProductList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
               <CartShopList/>
            </div>
        );
    }

}
