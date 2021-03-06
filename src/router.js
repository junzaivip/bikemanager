import  React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import BasicTable from './pages/table/basicTable'
import Home from './pages/home'
import NoMatch from './pages/nomatch'



export default class BRouter extends React.Component{

    render(){
        return(
            <Router>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/table/basic" component={BasicTable}/>






                                <Route  component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </Router>
        )
    }
}