import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import AboutUs from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import Members from './pages/members'

const Routes = () => {

    return (

        <BrowserRouter>

            <Route component={Home} path='/' exact />
            <Route component={AboutUs} path='/Quem-somos-nos' />
            <Route component={Contact} path='/contato'/>
            <Route component={Services} path='/Servicos'/>
            <Route component={Members} path='/membros'/>

        </BrowserRouter>

    )

}

export default Routes;
