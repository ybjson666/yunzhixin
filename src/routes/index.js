  
import React, { Component } from 'react'
import { HashRouter as Router,Route,Switch ,Redirect} from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'



export default class Routers extends Component {
    
    render() {
        return (
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} exact></Route>
                        <Route component={Main} ></Route>
                        <Redirect from="/*" to='/main'/>
                    </Switch>
                </Router>
        )
    }
}