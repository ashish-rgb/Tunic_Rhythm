import React from "react";

function NavBar(){
    return(
        <nav class="navbar fixed-top navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="">Tunic Rhythm</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active top-songs" href="#">Top 10 Songs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active top-artists" href="#">Top 10 Artists</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active add" href="#">Add</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;