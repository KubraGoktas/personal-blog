import React from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import { Row } from 'reactstrap'
import Header from '../components/Header'
import AboutMe from '../pages/AboutMe'
import ContactMe from '../pages/ContactMe'
import MyWork from '../pages/MyWork'
import Footer from '../components/Footer'
import { routes } from './routes'
import Comments from '../pages/Comments'

const PageRouter = () => {
    return (

        <Router>
            <Header />
            <div style={{ marginTop: 70 }}>

                <Header />
                <AboutMe />
                <MyWork />
                <Comments />
                <ContactMe />
                <Footer />
            </div>
            {/* <div style={{marginTop:70}}>
                <Switch>
                    {
                        routes.map((item, key) => {
                            return (
                                <Route key={key} path={item.path} component={item.component} />
                            )
                        })
                    }

                </Switch>
            </div> */}
        </Router>

    )
}

export default PageRouter
