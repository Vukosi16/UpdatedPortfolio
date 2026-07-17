import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <>
        <div className='NavBarContainer'>
            <div className="navGrid">
                <Link to='/' className="navItem">Home</Link>
                <Link to='/documents' className="navItem">My Documents</Link>
                <Link to='/projects' className="navItem">Projects</Link>
                <Link to='/recent-work' className="navItem">Recent Work</Link>  
                <Link to='/get-in-touch' className="navItem">Get In Touch</Link>  
            </div>
        </div>
    </>
    
  )
}

export default Nav