import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import List from '../pages/List'
import Layout from '../components/Layout'
import Edit from '../pages/Edit'
import Details from '../pages/Details'
import NotFound from '../pages/NotFound'

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch> 
                    <Route exact path = "/" component = {Inicio} />
                    <Route exact path = "/lista" component = {List} />
                    <Route exact path = "/:id/edit" component = {Edit} />
                    <Route exact path = "/:id" component = {Details} />
                    <Route component ={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App



