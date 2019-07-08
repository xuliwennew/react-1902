import React,{Component} from "react"
import productApi from "../apis/productApi"
import Product from  "../components/products/Product"
import LoadingMore from "../components/LoadingMore";
import ProductContext from "../contexts/ProductContext"

export default class ProductList extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            sdata:{title:"共享数据"}
        }
    }

    async componentWillMount(){
       let data = await  productApi.getProducts()
        console.log(data)
       this.setState({
           list:data
       })
    }

    render() {
        if(this.state.list.length>0){
            return (
                <ProductContext.Provider value={this.state.sdata}>
                    <ul>
                        {
                            this.state.list.map((item,key)=>{
                                console.log(item)
                                return <Product data={item} key={key}/>
                            })
                        }
                    </ul>
                </ProductContext.Provider>
            );
        }else {
            return <LoadingMore/>
        }
    }

}
