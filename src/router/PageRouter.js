import React from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import { Row } from 'reactstrap'
import Header from '../components/Header'
import AboutMe from '../pages/AboutMe'
import ContactMe from '../pages/ContactMe'
import MyWork from '../pages/MyWork'
import Footer from '../components/Footer'
import Comments from '../pages/Comments'

const PageRouter = () => {
    return (

        <>
            <Header />
            <div style={{ marginTop: 50 }}>
                <AboutMe />
                <MyWork />
                <Comments />
                <ContactMe />
                <Footer />
            </div>
        </>
    )
}

export default PageRouter
