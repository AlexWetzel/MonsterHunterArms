import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () =>
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h5 className="white-text">About</h5>
          <p className="grey-text text-lighten-4">Monster Hunter World has attracted the attention of many new players.
           Monster Hunter Arms was made out of the desire to help new players and to contribute the the best game community ever!
           <br />
           <Link to="/about">read more...</Link>
           </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li><Link className="grey-text text-lighten-3" to="/">Main Page</Link></li>
            <li><Link className="grey-text text-lighten-3" to="/weapons">Weapons</Link></li>
            <li><Link className="grey-text text-lighten-3" to="/combo">Combo Test</Link></li>
            {/* <li><a className="grey-text text-lighten-3" href="/about">About</a></li> */}
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2018 Alexander Wetzel 
      <br />
      Monster Hunter © 2004-2018 CAPCOM CO., LTD.
      <a className="grey-text text-lighten-4 right" target="_blank" href="/github">Github Page</a>
      </div>
    </div>
  </footer>
;

export default Footer;