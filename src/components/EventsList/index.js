import React from 'react'
import { Link } from "react-router-dom"

export default class EventsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.events
          .map((event, id) =>
            <li key={id}>
              <Link to={`:3000/event/${id}`}>
                {event.name}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }
}