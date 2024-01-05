import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/routes'
export default function ErrorPage() {
  return (
    <div>
        <h2>404 | Page not found</h2>
        <Link to={ROUTES.HOME}>Go Home</Link>
    </div>
  )
}
