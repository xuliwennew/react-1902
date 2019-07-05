import React,{Component} from "react"

import userApi from "../apis/userApi"





export default class UserList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            list:[]
        }

    }

    async componentWillMount(){
        console.log("1111")
        let data = await  userApi.getUser()
        console.log(data)
        this.setState({
            list:data
        })
    }


    render() {

        return  <ul>
            {
                this.state.list.map((item,key)=>{
                    return <li key={key}>{item.name}</li>
                })
            }
        </ul>
    }

}
