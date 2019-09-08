import React from 'react'


export default class Info extends React.Component{

    constructor(props){
        super(props);

        console.log(this.props)


    }



    render(){

        return(
            <div>
                这里是测试动态路由功能.
              动态路由的值：  {this.props.match.params.value}
            </div>
        )
    }
}
