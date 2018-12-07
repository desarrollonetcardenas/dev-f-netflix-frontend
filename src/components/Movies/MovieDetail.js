import React, { Component } from 'react'
import gql from 'graphql-tag';
import  Youtube from "react-youtube";
import  {Query} from 'react-apollo';
import { Preloader } from '../../common/Preloader';

const SINGLEMOVIE = gql`
    query findMovieByID($id:ID!){
        movie(id:$id){
            _id,
            movie_url,
            name,
            sinopsis
        }
    }
`


export default class MovieDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id
        };
    }

    handleError = (error) => {
      console.log('An error ocurred while playing video: ', error);
    }

    playVideo = (data, opts) => {
        return (
            <React.Fragment>
                <h4>{data.movie.name}</h4>
                <Youtube
                    videoId={data.movie.movie_url.split("=")[1]}
                    opts={opts}>
                </Youtube>
            </React.Fragment>
        )
    }


  render() {
      const options = {
          height: '390',
          width: '640',
          playerVars: {
              autoplay: 1
          }
      };

    return (
      <div className="container">
        <div className="row">
            <div className="col s12">
                <Query query={SINGLEMOVIE} variables={{id: this.state.id}}>
                {
                    ({loading,data,error}) => {
                        if(error) return this.handleError(error);
                        if(loading) return <Preloader></Preloader>

                        return(
                            this.playVideo(data, options)
                        )
                    }
                }
                </Query>
            </div>
        </div>
      </div>
    )
  }
}
