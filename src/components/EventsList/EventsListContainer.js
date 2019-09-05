import React from 'react'
import { loadEvents } from '../../actions/events'
import { connect } from 'react-redux'
import EventsList from './EventsList'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
      <div>
        <h1>Events:</h1>
        {!this.props.events ? "loading.." : <EventsList events={this.props.events} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventsListContainer)
