import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function RouteDev() {
    return (
        <>


            <Router>

                <Switch>

                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/about" component={About} />
                    <Route exact={true} path="/service" component={Service} />
                    <Route exact={true} path="/contact" component={Contact} />


                </Switch>

            </Router>



        </>
    )
}

export default RouteDev
