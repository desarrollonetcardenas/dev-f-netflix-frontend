import React, { Component } from 'react'
import FileUploader from "react-firebase-file-uploader";

import { Input } from "../../common/Input";
import firebaseConfig from '../../firebaseConfig';

export default class MovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            genre: "",
            director: "",
            cast: [],
            sinopsis: "",
            duration: "",
            realesed_date: "",
            rating:4.5,
            rate: "",
            language: "",
            cover: "",
            movie_url: "",
            progress:0,
            actor:{
                castName:"",
                age:""
            }
        }
    }

    addCast = () => {
      const newCast = this.state.actor;
      this.setState({
          cast:[...this.state.cast, newCast],
          actor:{
              castName:"",
              age:""
          }
      });
    }

    handleCastInput = (e) => {
      const {id, value} = e.target;
      let newCast = {...this.state.actor};
      newCast[id] = value;
      this.setState({
          actor:{...newCast}
      })
    }

    CastInput = () => {
      return(
          <React.Fragment>
             <ul>
                {this.state.cast.map((actor,index) =>(
                    <li key={index}>{actor.name}</li>
                ))
                }
            </ul>
              <div className="col s6 input-field">
                  <Input
                    type="text"
                    id="castName"
                    name="castName"
                    value={this.state.actor.castName}
                    setInput={this.handleCastInput}
                    required
                  ></Input>
              </div>
              <div className="col s6 input-field">
                  <Input
                    type="text"
                    id="age"
                    name="age"
                    value={this.state.actor.age}
                    setInput={this.handleCastInput}
                    required
                  ></Input>
              </div>

              <button className="waves-effect waves-ligth btn btn-primary"
                onClick={this.addCast}>
                    Agregar
              </button>

          </React.Fragment>
      )
    }


    handleInput = (e) => {
      const{id, value} = e.target;
      this.setState({
          [id]:value
      })
    }



    handleUploadError = (error) => {
      console.log(error);
    }

    progressFile = (progress) => {
      this.setState({progress});
    }


    handleUploadSuccess = (filename) => {
      this.setState({progress: 100});

      firebaseConfig.storage()
        .ref("convers")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({cover:url}))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col s10 input-field">
                <Input
                    type="text"
                    id="name"
                    name="Title"
                    value={this.state.name}
                    setInput={this.handleInput}
                    required
                ></Input>
            </div>
            <div className="col s10 input-field">
                <select name="genre" value={this.state.genre} onChange={this.handleInput} id="genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="ACTION">Action</option>
                    <option value="DRAMA">Drama</option>
                    <option value="SCIFI">Scify</option>
                    <option value="HORROR">Horror</option>
                </select>
                <label htmlFor="">Genre</label>
            </div>
            <div className="col s10 input-field">
                <Input
                    type="text"
                    id="director"
                    name="Director"
                    value={this.state.director}
                    setInput={this.handleInput}
                    required
                ></Input>
            </div>
            { this.CastInput() }
            <div className="col s10 input-field">
                <textarea name="sinopsis" id="sinopsis" cols="30" rows="10" value={this.state.sinopsis}
                    onChange={this.handleInput}
                >
                </textarea>
                <label htmlFor="sinopsis">Sinopsis</label>
            </div>

            <div className="col s20 input-field">
                <Input
                    type="text"
                    id="duration"
                    name="Duration"
                    value={this.state.duration}
                    setInput={this.handleInput}
                    required
                ></Input>
            </div>

            <div className="col s10-input-field">
                <Input
                    type="text"
                    id="released_date"
                    name="Released Date"
                    value={this.state.realesed_date}
                    setInput={this.handleInput}
                    required
                ></Input>
            </div>

            <div className="col s10 input-field">
                <select value={this.state.rate} onChange={this.handleInput}>
                    <option value="A">Clasification A</option>
                    <option value="B">Clasification B</option>
                    <option value="C">Clasification C</option>
                    <option value="B15">Clasification B15</option>
                </select>
                <label htmlFor="rate">Rate</label>
            </div>

            <div className="col s10 input-field">
                <Input
                    type="text"
                    id="language"
                    name="Language"
                    value={this.state.language}
                    setInput={this.handleInput}
                    required
                ></Input>
            </div>

            <div className="col s10 input-field">
                <Input
                    type="text"
                    id="movie_url"
                    name=" Movie URL"
                    value={this.state.movie_url}
                    setInput={this.handleInput}
                    required
                ></Input>
            </div>

            <div className="col s10">
                <label className="btn btn-primary">
                    <FileUploader
                        hidden
                        accept="image/*"
                        randomizeFilename
                        storage={
                            firebaseConfig.storage().ref('covers')
                        }
                        onUploadError={this.handleUploadError}
                        onProgress={this.progressFile}
                        onUploadSuccess={this.handleUploadSuccess}
                    ></FileUploader>
                </label>
            </div>

        </div>
      </div>
    )
  }
}
