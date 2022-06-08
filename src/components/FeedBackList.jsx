import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'

export default function FeedbackList() {

    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length ===0)){
        return <div>No Feedback yet.</div>
    }

  return isLoading ? <Spinner/>:(
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
