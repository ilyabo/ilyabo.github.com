import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const NotFoundPage = () => (
  <div style={{
    padding: rhythm(1)
  }}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Just visit the main page instead!</Link>
  </div>
)

export default NotFoundPage
