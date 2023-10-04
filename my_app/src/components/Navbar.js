import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="m-2">
      <Link to="/">HOme </Link>

      </li>
      <li class="m-2">
      <Link to="/about"> about </Link>

      </li>
      <li class="m-2">
      <Link to="/contact"> Contact </Link>

      </li>
     
     
     
    </ul>
   
  </div>
</nav>
      </div>
    )
  }
}
