import React from 'react'

import {Card,Table} from 'antd'


export default class BasicTable extends React.Component{
    state={}

    componentDidMount(){
        const dataSource = [
            {
                id:'1',
                userName:'zhang',
                sex:'1',
                interest:'Good',
                hobby:'游泳',
                birthday:'2019-04-15',
                address:'北京市',
                time:'9:15'
            },
            {
                id:'2',
                userName:'zhang',
                sex:'1',
                interest:'Good',
                hobby:'游泳',
                birthday:'2019-04-15',
                address:'北京市',
                time:'9:15'
            },
            {
                id:'3',
                userName:'zhang',
                sex:'1',
                interest:'Good',
                hobby:'游泳',
                birthday:'2019-04-15',
                address:'北京市',
                time:'9:15'
            }
            , {
                id:'4',
                userName:'zhang',
                sex:'1',
                interest:'Good',
                hobby:'游泳',
                birthday:'2019-04-15',
                address:'北京市',
                time:'9:15'
            }
        ]

        this.setState({
            dataSource
        })
    }

    render(){
        const columns = [
            {
              title:'id',
              dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex'
            }, {
                title:'状态',
                dataIndex:'interest'
            },
            {
                title:'爱好',
                dataIndex:'hobby'
            }
            ,
            {
                title:'生日',
                dataIndex:'birthday'
            }
            ,
            {
                title:'地址',
                dataIndex:'address'
            }
            ,
            {
                title:'早起时间',
                dataIndex:'time'
            }

        ]


        return (
            <div>
               <Card title="基础表格">
                   <Table
                       columns={columns} dataSource={this.state.dataSource}
                       pagination={false}
                   />

               </Card>
            </div>
        )
    }
}