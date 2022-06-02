import React, { useState } from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

export default function FeedbackItem({item, handleClick}) {
    const {id, rating, text} = item

    // const [ rating, setRating] = useState(10)
    // const [ text, setText ] = useState('This is an example of a Feedback item.')

  return (
    <Card>
        <div className='num-display'>{rating}</div>
        <button className='close' onClick={()=>handleClick(id)}>
            <FaTimes color='purple'/>
            </button>
          <div className='text-display'>{text}</div>
    </Card>
  )
}
