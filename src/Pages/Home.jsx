import React from 'react'
import Nav from '../Components/Nav.jsx'

const Home = () => {
  return (
    <>
        <Nav />
        <div className="frontPageContainer">
            
            <div className="mainPage">
                
                <div className="heroContainer">
                    <div className="leftHeroText">
                        <h1 className="heroHeading">
                            Vukosi Mohlabini
                        </h1>
                        <p className="heroText">
                            Hello! I am Vukosi Mohlabini, a Full Stack Developer from Pretoria, South Africa. I have a passion for making cool stuff and solving problems. Look around and see what I have been working on. If you like what you see, feel free to reach out to me.
                        </p>
                        <button className="ctaButton">
                            Reach out to me &#x2192;
                        </button>
                    </div>
                    <div className="rightHeroImage">
                        <img className='portraitImg' src="../src/assets/WhatsApp Image 2025-10-16 at 08.49.01.jpeg" alt="" />
                    </div>
                </div>

                <div className="footerWorkedWith">
                    <div className="gridWorkedOn">
                        <div className="navItem">SpecCon</div>
                        <div className="navItem">Shaper</div>
                        <div className="navItem">Projects</div>
                        <div className="navItem">Recent Work</div>  
                        <div className="navItem">Get In Touch</div>  
                    </div>
                </div>

            </div>

        </div>
    </>
    
  )
}

export default Home