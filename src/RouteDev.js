import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import PostForm from './pages/PostForm';
import PostInfo from './pages/PostInfo';

function RouteDev() {
    return (
        <>


            <Router>

                <Switch>

                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/about" component={About} />
                    <Route exact={true} path="/service" component={Service} />
                    <Route exact={true} path="/contact" component={Contact} />
                    <Route exact={true} path="/posts/create" component={PostForm} />
                    <Route exact={true} path="/posts/detail/:id" component={PostInfo} />


                </Switch>

            </Router>



        </>
    )
}

export default RouteDev
