import React, { Component } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { Preloader } from "../../common/Preloader";

const GETPROFILE = gql`
    query GETPROFILE{
        me{
            first_name,
            last_name,
            email,
            birth_date,
            gender,
            nationality,
            subscription_id{
                type_subscription,
                start_date,
                end_date
            }
        }
    }
`
export default class Me extends Component {

    handleError = (error) => {
    console.error('Ocurrio un error: ', error);
    }


  render() {
    return (
      <div className="container">
        <Query query={GETPROFILE}>
            {
                ({loading,error,data}) => {
                    if(error) return this.handleError(error);
                    if(loading) return <Preloader></Preloader>

                    const {me} = data;

                    return (
                        <div className="col s12">
                            <h4>Nombre: {data.me.first_name} {data.me.last_name}</h4>
                            <h5>Email: {me.email}</h5>
                            <h5>Birth Date: {me.birth_date}</h5>
                            <h5>Gender: {me.gender}</h5>
                            <h5>Nationality: {me.nationality}</h5>
                            <h5>Subscription: {me.subscription_id.type_subscription}</h5>
                            <h5>Subscription End {me.subscription_id.end_date}</h5>
                            <button className="waves-effect waves-light btn btn-primary">
                                Upgrade Subscription
                            </button>
                        </div>
                    )
                }
            }
        </Query>
      </div>
    )
  }
}
