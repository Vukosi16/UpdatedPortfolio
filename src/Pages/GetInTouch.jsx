import React, { useState } from 'react'
import '../Styles/getInTouch.css'

export const GetInTouch = () => {
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.submit();
    };

    async function copyText() {
        try {
            await navigator.clipboard.writeText("0672575232")
            setShowToast(true)
            setTimeout(() => setShowToast(false), 1800)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

  return (
    <>
        <div className="gitContainer">
            
            <div className="gitLeftContainer">
                <h1 className='gtiHeading'>GET IN TOUCH</h1>
                
                <div className="gitParaContainer">
                    <p className="gitParagraph">
                        Hey! Thanks for viewing my portfolio. This is to show my ability to build software and products at my level. Whether you are looking to work wth NuMedia or you are a recuiter, please feel free to contact me on these platforms below. Or leave your details in the form🙏.
                    </p>
                </div>

                <div className="contactGrid">
                    <div className="gridItem">
                        <a href="https://www.linkedin.com/in/vukosi-mohlabini-158646174/" target="_blank">
                            <img src="../src/assets/Linkedin.svg" alt="" className="icons" />
                        </a>
                    </div>
                    <div className="gridItem">
                        <a href="https://github.com/Vukosi16" target="_blank" rel="noopener noreferrer">
                            <img src="../src/assets/githubIcon.svg" alt="" className="icons" />
                        </a>
                    </div>
                    <div className="gridItem">
                        <a href="mailto:vukosimohlabini16@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="../src/assets/gmail.svg" alt="" className="icons" />
                        </a>
                    </div>
                    <div className="gridItem" onClick={copyText}>
                        <img src="../src/assets/phone.svg" alt="" className="icons" />
                    </div>

                </div>

            </div>

            <div className="gitRightFormContainer">
                <form className='formEdits' onSubmit={handleSubmit} action='https://formspree.io/f/xzdnrboq' method='POST'>
                    <input 
                        type="text" 
                        id='nameTextBox'
                        placeholder=' Enter your Name'
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        id='emailTextBox'
                        placeholder=' Enter a valid email address'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id='companyOfIntrest'
                        placeholder=' Company of interest'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id='message'
                        placeholder=' Enter Message (optional)'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}   
                    />
                    <button className='submitButton'>Submit</button>
                </form>
            </div>


            {showToast && (
                <div className="copyToast">Phone number copied!</div>
            )}
        </div>
    
    
    
    </>
  )
}
