import React, {Component} from "react"
import "./scrolllist.css"
import BScroll from "better-scroll"
import LoadingMore from "./LoadingMore";


export default class MyList extends Component{
    constructor(props) {
        super(props);

        this.state ={
            pullDownFlag : "none"
        }

    }

    render() {
        return  (
            <div className="wrapper"  ref="w">
                <div>
                    <div style={{ textAlign:"center",position:"relative", color:"red",height:"30px",display:this.state.pullDownFlag}}  >
                        <LoadingMore/>
                    </div>
                    <ul>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                        <li className="item"><h1>1</h1></li>
                    </ul>
                </div>
            </div>);
    }


    componentDidMount(){
        let myScroll= new BScroll(this.refs.w,{
            probeType:3
        })

        myScroll.on("scroll",(e)=>{
            console.log(myScroll.y)
            if(myScroll.y >0){
                this.setState({
                    pullDownFlag:"block"
                })
            }
        })


        myScroll.on("scrollEnd",()=>{
            this.setState({
                pullDownFlag:"none"
            })
        })
    }

}
