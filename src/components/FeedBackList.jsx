import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({ feedback, handleClick}) {

    if(!feedback || feedback.length ===0){
        return <div>No Feedback yet.</div>
    }
  return (
    <div className='feedback-list'>
        {feedback.map(item=>{
            return (
                <FeedbackItem 
                key={item.id} 
                item={item}
                handleClick={handleClick}/>
            )
        })}
    </div>
  )
}
