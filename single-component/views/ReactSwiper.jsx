import React,{Component} from "react"
import Swiper from "swiper"

export default class ReactSwiper extends Component{
    constructor(props) {
        super(props);

    }

    render() {

        let innerStyle = {
            box:{
               width:"100%",
               height:"300px"
            },
            box1:{
                backgroundColor:"red"
            },
            box2:{
                backgroundColor:"green"
            },
            box3:{
                backgroundColor:"yellow"
            }
        }


        return (
            <div ref="s" className="swiper-container" style={innerStyle.box}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={innerStyle.box1}></div>
                    <div className="swiper-slide" style={innerStyle.box2}></div>
                    <div className="swiper-slide" style={innerStyle.box3}></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        );
    }

    componentDidMount(){
       new Swiper(this.refs.s,{
           pagination:{
               el:".swiper-pagination"
           }
       })
    }



}
