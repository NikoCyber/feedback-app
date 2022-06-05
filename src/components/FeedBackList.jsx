import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length ===0){
        return <div>No Feedback yet.</div>
    }

  return (
    <div className='feedback-list'>
        {feedback.map(item=>{
            return (
                <FeedbackItem 
                key={item.id} 
                item={item}/>
            )
        })}
    </div>
  )
}
