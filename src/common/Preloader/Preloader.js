import React, { Component } from 'react'

export default class Preloader extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
  }
}
