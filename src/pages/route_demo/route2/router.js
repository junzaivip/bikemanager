import React from 'react'

import {HashRouter as Router, Route, Link} from 'react-router-dom'
import About from "../route1/About";
import Topic from "../route1/Topic";
import Main from "../route1/Main";

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