import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import '../../App.scss'

const Check = ({ isCompleted }) => {
  console.log('Received isCompleted:', isCompleted)
  return (
    <div className='check-box'>
      {isCompleted && (
        <IoMdCheckmark
          style={{
            height: '15px',
            width: '15px',
            color: 'black',
            backgroundColor: 'pink',
            borderRadius: '50%'
          }}
          className='check'
        />
      )}
    </div>
  )
}
export default Check
