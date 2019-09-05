import React from 'react'
import { connect } from "react-redux"
import { createEvent } from "../../actions/events"
import EventForm from "./CreateEventForm"

class CreateEventFormContainer extends React.Component {
  state = {
    name: "",
    date: "",
    description: ""
  }

  onChange = (event) => {
    this.setState({
      // will work for any of the keys
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    // form shouldn't refresh page
    event.preventDefault()
    // calls mapped action creator
    this.props.createEvent(this.state)
    // resets form and state
    this.setState({
      name: "",
      date: "",
      description: ""
    })
  }

  render() {
    return (<EventForm
      // // adds callback props!
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      // connects to this.state
      values={this.state}
    />)
  }
}

const mapDispatchToProps = {
  createEvent
}

export default connect(null, mapDispatchToProps)(CreateEventFormContainer)