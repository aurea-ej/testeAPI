import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import AboutUs from './pages/about'
import Contact from './pages/contact'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={AboutUs} path='/Quem-somos-nos' />
            <Route component={Contact} path='/contato'/>

        </BrowserRouter>

    )

}

export default Routes;
