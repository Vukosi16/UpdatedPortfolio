import React from 'react'
import Nav from '../Components/Nav.jsx'
import {Link} from 'react-router'
import '../Styles/App.css'
import portrait from '../assets/portrait.jpeg'
import speeconLogo from '../assets/specconLogo.jpeg'
import shaperLogo from '../assets/shaperLogo.png'
import setaLogo from '../assets/seta.png'
import richfieldLogo from '../assets/richfieldLogo.png'
import codexLogo from '../assets/codexLogo.jpeg'


const Home = () => {
  return (
    <>
        <Nav />
        <div className="frontPageContainer">
            
            <div className="mainPage">
                
                <div className="heroContainer">
                    <div className="leftHeroText">
                        <h1 className="heroHeading">
                            VUKOSI MOHLABINI
                        </h1>
                        <p className="heroText">
                            Hello! I am Vukosi Mohlabini, a Full Stack Developer from Pretoria, South Africa. I have a passion for making cool stuff and solving problems. Look around and see what I have been working on. If you like what you see, feel free to reach out to me.
                        </p>
                        <Link to="/get-in-touch" className="ctaButtonLink">
                            <button className="ctaButton">
                                Reach out to me &#x2192;
                            </button>
                        </Link>
                    </div>
                    <div className="rightHeroImage">
                        <img className='portraitImg' src={portrait} alt="" />
                    </div>
                </div>

                <div className="headingContainer">
                    <h3 className='workedOnHeading'>
                        Where I've learnt and worked
                    </h3>   
                </div>
                
                <div className="footerWorkedWith">
                    <div className="gridWorkedOn">
                        <div className="navItem wo">SpecCon
                            <img src={speeconLogo} alt="" className="workedOnLogo" />
                        </div>
                        <div className="navItem wo">Shaper
                            <img src={shaperLogo} alt="" className="workedOnLogo" />
                        </div>
                        <div className="navItem wo">SETA
                            <img src={setaLogo} alt="" className="workedOnLogo" />
                        </div>
                        <div className="navItem wo">Richfield
                            <img src={richfieldLogo} alt="" className="workedOnLogo" /></div>  
                        <div className="navItem wo">CodeX
                            <img src={codexLogo} alt="" className="workedOnLogo" /></div>  
                    </div>
                </div>

            </div>

        </div>
    </>
    
  )
}

export default Home