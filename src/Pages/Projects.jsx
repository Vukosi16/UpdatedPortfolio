import React from 'react'

const Projects = () => {
  return (
    <div className="projectsPage">
      <div className="projectsEmptyState">
        <div className="projectsBadge">Coming soon</div>
        <h1>No projects yet</h1>
        <p>
          I’m currently building new ideas and polishing a few things. Check back soon for
          fresh work, case studies, and live demos.
        </p>
        <div className="projectsPreview">
          <div className="projectPlaceholder">UI/UX</div>
          <div className="projectPlaceholder">Full-stack</div>
          <div className="projectPlaceholder">Creative apps</div>
        </div>
      </div>
    </div>
  )
}

export default Projects