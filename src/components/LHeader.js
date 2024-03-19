import React from 'react'
import{Link} from 'react-router-dom';

export const LHeader = () => {
  return (
  <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="../components/Pages/About.js">About</Link>
        </li>
        <li>
            <Link to="../components/Pages/Contact.js">Contact</Link>
        </li>
    </ul>
  </nav>
  )
}
