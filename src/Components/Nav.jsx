import React from 'react'
import '../Styles/Nav.css'

const Nav = () => {
  return (
    <>
        <div className='NavBarContainer'>
            <div className="navGrid">
                <div className="navItem">Home</div>
                <div className="navItem">Documents</div>
                <div className="navItem">Projects</div>
                <div className="navItem">Recent Work</div>  
                <div className="navItem">Get In Touch</div>  
            </div>
        </div>
    </>
    
  )
}

export default Nav