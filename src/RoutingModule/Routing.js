import React from 'react'
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Header } from '../Component1/Layout/Header'

import { Home } from '../Component1/Home/Home'
import {ReducerExample} from '../UseReducer/ReducerExample'
import UseRef from '../Component1/useRef/useRef'


export const Routing = () => {
    return (
        <Router>
            <Header/>
            <Switch>
        
                <Route path="/useref" component={UseRef}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/cnt" component={ReducerExample}></Route>

            </Switch>
        </Router>
    )
}
