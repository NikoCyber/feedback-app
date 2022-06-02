import React from 'react'

export default function FeedbackStats({feedback}) {
    let avarage = feedback.reduce((accum, cur) => accum + cur.rating, 0) /feedback.length

    avarage = avarage.toFixed(1) //one decimal after .
  return (
      <div className='feedback-stats'>
          <h4>Total: {feedback.length}</h4>
          <h4>Avarage rating: {isNaN(avarage) ? 0 : avarage}</h4>
        </div>
  )
}
