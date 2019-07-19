import React , {Component} from "react"
import CartShop from "./CartShop"


export default class CartShopList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
               <CartShop/>
            </div>
        );
    }

}
