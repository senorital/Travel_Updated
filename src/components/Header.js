import React, { Fragment } from "react";
function Header(){
    return (
        <Fragment>
       <div class="  header">
        <div class="container">
        <nav class="navbar navbar-expand-xl navbar-light">
        <a class="navbar-brand" href="index.html">
        <img src="" alt="" class="pt-0 pb-0" width="200"/>
        </a>
        <div class="collapse navbar-collapse " id="navbarText">
        <ul class="navbar-nav  ml-auto">
        <li class="nav-item">
        <a class="nav-link hovereffect" href="index.html">HOME <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link hovereffect" href="flights.html">FLIGHT</a>
        </li>
        <li class="nav-item">
        <a href="portal/mybooking.html" class="nav-link hovereffect">MY TRIPS</a>
        </li>
        </ul>
        
        </div>
   
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        </nav>
        
        </div>
        </div>
        </Fragment>
    )
}

export default Header;
