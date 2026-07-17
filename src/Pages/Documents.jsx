import { useState } from 'react'
import '../Styles/Documents.css'

const documents = [
  {
    id: 'cv',
    icon: '../src/assets/cvIcon.svg',
    title: 'CV / Resumme',
    desc: 'A summary of my work experience, skills, and education.',
    file: '../src/files/Vukosi Mohlabini Resume CV Programming (1).pdf',
  },
  {
    id: 'transcript',
    icon: '../src/assets/transcriptIcon.svg',
    title: 'Academic Transcript',
    desc: 'Official record of my completed modules and grades.',
    file: '../src/files/RP_RGIT_01AcademicTranscriptIEnabler.pdf',
  },
  {
    id: 'nqf5',
    icon: '../src/assets/diploma.svg',
    title: 'NQF 5 Certificate in System Support',
    desc: 'National Qualifications Framework Level 5 certificate in System Support.',
    file: '../src/files/System Support Certificate.pdf',
  },
  {
    id: 'nqf5-2',
    icon: '../src/assets/diploma.svg',
    title: 'NQF 5 Certificate in Systems Development',
    desc: 'Additional NQF 5 qualification documentation.',
    file: '../src/files/Highest Qualification.pdf',
  },
  {
    id: 'certificate',
    icon: '../src/assets/certificate.svg',
    title: 'Business Analysis Certificate',
    desc: 'A 12 month Bussiness Analysis course completed at Shaper.',
    file: '../src/files/Vukosi_Blessing_Mohlabini_Shaper_Certificate_Nov_2025.pdf',
  },
  {
    id: 'github',
    icon: '../src/assets/githubIcon.svg',
    title: 'GitHub Profile',
    desc: 'A snapshot of my public repositories and contributions.',
    file: '/',
  },
]

const Documents = () => {
  const [flippedId, setFlippedId] = useState(null)

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id)
  }

  return (
    <div className="documentContainer">
      <h1>My Documents</h1>
      <div className="documentsGrid">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`gridItem ${flippedId === doc.id ? 'flipped' : ''}`}
            onClick={() => handleFlip(doc.id)}
          >
            <div className="cardInner">
              <div className="cardFront">
                <img className="gridIcon" src={doc.icon} alt={doc.title} />
                <p className="cardTitle">{doc.title}</p>
              </div>

              <div className="cardBack">
                <p className="cardDesc">{doc.desc}</p>
                <a 
                  href={doc.file}
                  download
                  className="downloadBtn"
                  onClick={(e) => e.stopPropagation()} // prevents the click from also flipping the card back
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Documents