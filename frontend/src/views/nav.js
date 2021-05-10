import React from 'react';
import {Link} from 'react-router-dom';
// import Capitales from './Capitales ';
// import Codes from './Codes'
// import Languse from './Languse'
// import Pays from './Pays'
// import Country from "./Country";

const nav = () => {
    return (
        
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><Link to="/" className='text-secondary'>Countries informations</Link></a>
    <button className="navbar-toggler r" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><Link to="/contry">Capitales des pays</Link> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><Link to="/codes">Codes de pays</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><Link to="/languse">Langues</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><Link to="/pays">Calling code</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/contry" tabIndex="-1" aria-disabled="true"></a>
        </li>
      </ul>

    </div>
  
  </div>
</nav>
</div>
        
    );
}

export default nav;
