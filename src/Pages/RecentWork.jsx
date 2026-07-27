import React from 'react'

const RecentWork = () => {
  return (
    <div className="projectsPage">
      <div className="projectsRow">
        <div className="projectCard">
          <h1>Timesheet app for coaches at my soccer club</h1>
          <p>
            I’m currently building a timesheet app for my soccer club to track payments and keep
            everything organized in one place.
          </p>
          <a
            className="projectsLink"
            href="https://github.com/Vukosi16/timesheet-app"
            target="_blank"
            rel="noreferrer"
          >
            View the GitHub repo
          </a>
          <div className="projectsPreview">
            <div className="projectPlaceholder">Payment tracking</div>
            <div className="projectPlaceholder">Soccer club admin</div>
            <div className="projectPlaceholder">In progress</div>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectsBadge">Recent work</div>
          <h1>NuMedia consulting company</h1>
          <p>
            I’m launching NuMedia, my website-building consulting company, to help clients create
            polished online experiences from strategy through delivery.
          </p>
          <a
            className="projectsLink"
            href="https://github.com/Vukosi16/NuMedia"
            target="_blank"
            rel="noreferrer"
          >
            View the NuMedia GitHub repo
          </a>
          <div className="projectsPreview">
            <div className="projectPlaceholder">Website strategy</div>
            <div className="projectPlaceholder">Client builds</div>
            <div className="projectPlaceholder">Launching now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentWork
