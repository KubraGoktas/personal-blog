import React from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import { Row } from 'reactstrap'
import Header from '../components/Header'

import { routes } from './routes'

const PageRouter = () => {
    return (

        <Router>
            <Header />
            <div style={{marginTop:70}}>
                <Switch>
                    {
                        routes.map((item, key) => {
                            return (
                                <Route key={key} path={item.path} component={item.component} />
                            )
                        })
                    }

                </Switch>
            </div>
        </Router>

    )
}

export default PageRouter
