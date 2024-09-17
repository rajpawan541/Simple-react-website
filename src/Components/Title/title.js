import React from 'react'
import './title.css'
export const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
        <h4>{subTitle}</h4>
        <h1>{title}</h1>
    </div>
  )
}
