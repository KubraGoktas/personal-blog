import React, { lazy } from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import { Row } from 'reactstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { routes } from './routes'


const AboutMe = lazy(() => import('../pages/AboutMe'));
const ContactMe = lazy(() => import('../pages/ContactMe'));
const MyWork = lazy(() => import('../pages/MyWork'));
const Comments = lazy(() => import('../pages/Comments'));



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
