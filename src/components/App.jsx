import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import List from '../pages/List'
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch> 
                    <Route exact path = "/" component = {Inicio} />
                    <Route exact path = "/lista" component = {List} />
                    <Route component ={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App

