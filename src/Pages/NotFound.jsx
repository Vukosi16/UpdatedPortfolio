import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '0.75rem' }}>Page not found</h2>
      <p style={{ marginBottom: '1.5rem', maxWidth: '32rem' }}>
        The page you are looking for does not exist or may have moved.
      </p>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <button style={{ padding: '0.75rem 1.25rem', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Go back home
        </button>
      </Link>
    </div>
  )
}

export default NotFound
