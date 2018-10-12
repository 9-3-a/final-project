import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignInForm from './screens/login';
import SignUpForm from './screens/register';
import Review from './screens/review';
import NavbarFeatures from './components/navbar';


ReactDOM.render(
                <BrowserRouter>
                    <NavbarFeatures/>
                    <Switch>
                        <Route path = "/signin" component={ SignInForm } />
                        <Route path = "/signup" component={ SignUpForm } />
                        <Route path= "/review" component={Review} />
                    </Switch>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
