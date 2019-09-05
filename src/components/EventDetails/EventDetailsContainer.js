import React from 'react'
import EventDetails from './EventDetails'
import { connect } from 'react-redux'
import { loadEvent } from '../../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("eventdetails id:", this.props.match.params.id)
    this.props.loadEvent(this.props.match.params.id)
  }

  render() {
    return (!this.props.event ? "loading.." : <EventDetails event={this.props.event} />
    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer)
