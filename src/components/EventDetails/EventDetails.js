import React from 'react'

export default function EventDetails(props) {
  console.log("Details props.event", props.event)
  return (
    <div>
      <h1>
        {props.event.name}
      </h1>
      <i>
        When? {props.event.date}
      </i>
      <p>
        {props.event.description}
      </p>
    </div>
  )
}