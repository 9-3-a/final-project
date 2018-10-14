import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignInForm from './screens/login';
import SignUpForm from './screens/register';
import Review from './screens/review';
import Inventories from './screens/inventories';
import NavbarFeatures from './components/navbar';
import AboutUs from './screens/about';
import Newsletter from './screens/newsletter';
import ContactUs from './screens/contact'




ReactDOM.render(
                <BrowserRouter>
                    <div>
                        <NavbarFeatures />
                        <Switch>
                            <Route path = "/signin" component={ SignInForm } />
                            <Route path = "/signup" component={ SignUpForm } />
                            <Route path = "/wines" component = {Inventories} />
                            <Route path= "/review/:wineId" component={Review} />
                            <Route path= "/about" component= { AboutUs } />
                            <Route path= "/newsletter" component= { Newsletter } />
                            <Route path= "/contact" component= { ContactUs } />
                        </Switch>
                    </div>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
