import menuConfig from './../../config/menuConfig'
import './index.less'

import React from 'react'
import {Menu, Icon} from 'antd';



const {SubMenu} = Menu;




export default class Navleft extends React.Component {
    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })

    }

    // 菜单渲染 递归
    renderMenu=(data)=>{

        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>


        });

    }


    render() {


        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>like mage</h1>

                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}

                </Menu>
            </div>
        )
    }
}




