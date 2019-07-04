import React,{PureComponent} from "react"



export default class Main extends PureComponent{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <button type="button" className="layui-btn layui-btn-primary layui-btn-lg">大型按钮</button>
            </div>
        );
    }

}
