import React from 'react'

export default function CardLayout (props) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      <div className="row">
        {
          props.children
        }
      </div>
    </div>
  )
}
