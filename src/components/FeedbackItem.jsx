import React, { useContext} from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackItem({item}) {
    
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
    
    const {id, rating, text} = item

  return (
    <Card>
        <div className='num-display'>{rating}</div>
          <button className='edit' onClick={() => editFeedback(item)}>
              <FaEdit color='purple' />
          </button>
        <button className='close' onClick={()=>deleteFeedback(id)}>
            <FaTimes color='purple'/>
            </button>
          <div className='text-display'>{text}</div>
    </Card>
  )
}
