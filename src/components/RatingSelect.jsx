import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)

    const {feedbackEditState} = useContext(FeedbackContext)

    useEffect(()=>{
        setSelected(feedbackEditState.item.rating)
    }, [feedbackEditState])

    const handleChange =(e)=>{
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    const arr = Array.from(Array(10), (_, i) => i + 1)

  return (
    <ul className='rating'>
        {arr.map(i=>(
                <li key={i}>
                    <input
                        type='radio'
                        id={`num${i}`}
                        name='rating'
                        value={i}
                        onChange={handleChange}
                        checked={selected === i}
                    />
                    <label htmlFor={`num${i}`}>{i}</label>
                </li>
            ))}
    </ul>
  )
}
