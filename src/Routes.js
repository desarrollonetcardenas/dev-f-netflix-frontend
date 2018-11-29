import React from 'react';
import { Route } from "react-router-dom";

import { Home } from "./components/Home";
import { SignUp } from './components/SignUp';
import { LogOut } from "./components/LogOut";

export default [
    <Route exact path="/" component={Home} />,
    <Route exact path="/signup" component={SignUp} />,
    <Route exact path="/logout" component={LogOut} />
]
