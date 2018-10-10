import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignInForm from './screens/login';
import SignUpForm from './screens/register';

ReactDOM.render(<BrowserRouter>
                    <Switch>
                        <Route path = "/signin" component={ SignInForm } />
                        <Route path = "/signup" component={ SignUpForm } />
                    </Switch>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
