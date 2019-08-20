import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = ( props ) => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/countries'>See All Countries</Link>
          </li>
          <li>
            <Link to='/country/:code'>See A Country</Link>
          </li>
        </ul>
        <hr />
      </div>
    </Router>
)

export default Home