import React from  'react'
import {HashRouter, Route, Link,Switch} from 'react-router-dom'

export default class Home extends React.Component{


    render(){

        return(
                <div>
                    <ul>
                        <li>
                            <Link to="/" > Home1</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topic</Link>
                        </li>
                        <li>
                            <Link to="/main">Main</Link>
                        </li>

                    </ul>

                    <hr/>
                    {this.props.children}
                </div>

        )
    }
}