import React from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import { routes } from './routes'

const PageRouter = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map((item, key) => {
                        return (
                            <Route key={key} path={item.path} component={item.component} />
                        )
                    })
                }

            </Switch>
        </Router>
    )
}

export default PageRouter
