import React, { Component } from 'react'
import  gql  from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { Input } from "../../common/Input";
import { Preloader } from "../../common/Preloader";


const LOGIN = gql`
    mutation InicioSesion($email:String!,$password:String!) {
        login(email:$email,password:$password){
            token
        }
    }
`;

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleInput = (e) => {
        const { id, value } = e.target;

        this.setState({
            [id]: value
        });
    }

    handleForm = (e, login) => {
        e.preventDefault();
        login({ variables:{ ...this.state } });
    }

    renderLogin() {
        return (
            <form onSubmit={this.handleForm()}>
                <div className="container">
                    <div className="row">
                        <div className="col s-12 m-12 l-12">
                            <Input id={ "email" }
                                name={"email"}
                                type={"email"}
                                value={this.state.email}
                                required
                                ></Input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s-12 m-12">
                            <Input id={ "password" }
                                name={"password"}
                                type={"password"}
                                value={this.state.password}
                                required
                                ></Input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn btn-primary"
                                type="submit"
                                name="login"
                                id="login"
                                >Login</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    catchError = (error) => {
        console.log('An error has ocurred while login: ', error);
    }

    catchData = (data) => {
        const { token } = data.login;
        localStorage.setItem("netflixToken", token);
        this.props.history.push('/');
    }

    render() {
        return (
            <Mutation mutation={LOGIN}>
            {
                (InicioSesion, { data, error, loading }) => {
                    if(data) this.catchData(data);
                    if(error) this.catchError(error);
                    if(loading) return <Preloader/>;

                    return (
                        <form onSubmit={e => this.handleForm(e, InicioSesion) }>
                            <div className="container">
                                <div className="row">
                                    <div className="col s12 input-field">
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={this.state.email}
                                            setInput={this.handleInput}
                                            required
                                        ></Input>
                                    </div>
                                    <div className="col s12 input-field">
                                        <Input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={this.state.password}
                                            setInput={this.handleInput}
                                            required
                                        ></Input>
                                    </div>
                                    <button type="submit"
                                        className="waves-effect waves-light btn btn-primary"
                                    >Enviar</button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
            </Mutation>
        )
    }

}
