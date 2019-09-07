import React from 'react'

import {HashRouter as Router, Route, Link} from 'react-router-dom'
import About from "./About";
import Topic from "./Topic";
import Main from "./Main";

import Home from './Home'

export default class IRouter extends React.Component{


    render(){
        return(
            <Router>
              <Home>
                  {/*<Route path="/" exact={true} component={Main}></Route>*/}
                  <Route path="/main" render={()=>
                  <Main>
                      <Route path="/main/a" component={About}></Route>
                  </Main>
                  }></Route>


                  <Route path="/about" component={About}></Route>
                  <Route path="/topics" component={Topic}></Route>

              </Home>
            </Router>

        )
    }

}