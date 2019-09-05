import React from 'react'
import { loadEvents } from '../../actions/events'
import { connect } from 'react-redux'
import EventsList from './index'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return !this.props.events ? "loading.." : <EventsList events={this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventsListContainer)
