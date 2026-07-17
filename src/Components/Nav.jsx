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
                <div className="navItem">Projects</div>
                <div className="navItem">Recent Work</div>  
                <div className="navItem">Get In Touch</div>  
            </div>
        </div>
    </>
    
  )
}

export default Nav