import React from 'react'

const RecentWork = () => {
  return (
    <div className="projectsPage">
      <div className="projectsEmptyState">
        <div className="projectsBadge">Coming soon</div>
        <h1>No recent work yet</h1>
        <p>
          I’m updating this section with fresh highlights, projects, and recent milestones.
          Check back soon for a more complete snapshot of my latest work.
        </p>
        <div className="projectsPreview">
          <div className="projectPlaceholder">Recent builds</div>
          <div className="projectPlaceholder">Case studies</div>
          <div className="projectPlaceholder">Updates</div>
        </div>
      </div>
    </div>
  )
}

export default RecentWork
