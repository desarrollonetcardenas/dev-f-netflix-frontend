import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { Home } from "./components/Home";
import { SignUp } from './components/SignUp';
import { Login }  from './components/Login';
import { Movies } from './components/Movies';

const Logout = () => {
    localStorage.removeItem("netflixToken")
    return <Redirect to="/login" />
}

export default [
    <Route exact path="/" component={Home} />,
    <Route exact path="/signup" component={SignUp} key={1} />,
    <Route exact path="/login" component={Login} key={2} />,
    <Route exact path="/logout" component={Logout} key={3} />,
    <Route exact path="/movies" component={Movies} key={4} />
]
