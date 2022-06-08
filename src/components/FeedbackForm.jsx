import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

export default function FeedbackForm() {

    const { addFeedback, feedbackEditState, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
 

    useEffect(()=>{
        if(feedbackEditState.edit===true){
            setBtnDisabled(false)
            setText(feedbackEditState.item.text)
            setRating(feedbackEditState.item.rating)
        }
    }, [feedbackEditState])

    const handleTextChange = (e) => {

        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text!=='' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters.')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleChange = (e) => {
        e.preventDefault()
        if(text.trim().length>=10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEditState.edit ===true){
                updateFeedback(feedbackEditState.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
        }
        setText('')
    }

  return (
    <Card>
        <form onSubmit={handleChange}>
            <h2>How Would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className='input-group'>
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                  <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}