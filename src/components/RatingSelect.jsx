import React, { useState } from 'react'

export default function RatingSelect({select}) {

    const [selected, setSelected] = useState(2)

    const handleChange =(e)=>{
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

  return (
    <ul className='rating'>
        <li>
            <input
                type='radio'
                id='num1'
                name='rating'
                value='1'
                onChange={handleChange}
                checked={selected === 1}
            />
            <label htmlFor='num1'>1</label>
        </li>
          <li>
              <input
                  type='radio'
                  id='num2'
                  name='rating'
                  value='2'
                  onChange={handleChange}
                  checked={selected === 2}
              />
              <label htmlFor='num1'>2</label>
          </li>
    </ul>
  )
}
