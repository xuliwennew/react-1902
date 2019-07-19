import React , {Component} from "react"
import CartHeader from "../components/carts/CartHeader"
import CartFooter from "../components/carts/CartFooter"
import CartShopList from "../components/carts/CartShopList"


export default class Carts extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <CartHeader/>
                <CartShopList/>
                <CartFooter/>
            </React.Fragment>
        );
    }

}
