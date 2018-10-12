import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignInForm from './screens/login';
import SignUpForm from './screens/register';
import Review from './screens/review';
import Inventories from './screens/inventories';
import NavbarFeatures from './components/navbar';


ReactDOM.render(
                <BrowserRouter>
                    <div>
                        <NavbarFeatures />
                        <Switch>
                            <Route path = "/signin" component={ SignInForm } />
                            <Route path = "/signup" component={ SignUpForm } />
                            <Route path = "/wines" component = {Inventories} />
                            <Route path= "/review/:wineId" component={Review} />
                        </Switch>
                    </div>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
