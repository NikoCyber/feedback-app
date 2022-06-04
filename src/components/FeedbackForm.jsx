import React, { useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

export default function FeedbackForm({handleFeedback}) {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

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
            handleFeedback(newFeedback)
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


// const handleSubmit = (e) => {
//     e.preventDefault()
//     if (text.trim().length > 10) {
//         const newFeedback = {
//             text,
//             rating
//         }
//         handleAdd(newFeedback)
//     }
//     setText('')
// }