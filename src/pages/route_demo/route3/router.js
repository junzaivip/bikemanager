import React from 'react'

import {HashRouter as Router, Route, Link,Switch} from 'react-router-dom'
import About from "./About";
import Topic from "./Topic";
import Main from "./Main";
import Info from "./Info";
import NoMatch from "./NoMatch";

import Home from './Home'

export default class IRouter extends React.Component{


    render(){
        return(
            <Router>
              <Home>
                  <Switch>
                  {/*<Route path="/" exact={true} component={Main}></Route>*/}
                  <Route path="/main" render={()=>
                  <Main>
                      <Route path="/main/:value" component={Info}></Route>
                  </Main>
                  }></Route>


                  <Route path="/about" component={About}></Route>
                  <Route path="/topics" component={Topic}></Route>
                  <Route component={NoMatch}></Route>
                  </Switch>
              </Home>
            </Router>

        )
    }

}