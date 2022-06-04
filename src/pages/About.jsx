import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

export default function About() {
  return (
    <Card>
        <h2>About</h2>
        <p>This is about page.</p>
        <p>
            <Link to='/'>Home Page</Link>
        </p>
        
    </Card>
  )
}
