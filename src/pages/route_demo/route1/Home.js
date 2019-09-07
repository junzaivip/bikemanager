import React from  'react'
import {HashRouter, Route, Link,Switch} from 'react-router-dom'
import About from './About'
import Main from './Main'
import Topic from './Topic'

export default class Home extends React.Component{


    render(){

        return(
           <HashRouter>
               <div>
                   <ul>
                       <li>
                           <Link to="/" > Home</Link>
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
                   <Switch>

                   </Switch>
               </div>

           </HashRouter>
        )
    }
}