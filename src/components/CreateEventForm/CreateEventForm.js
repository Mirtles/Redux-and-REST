import React from 'react'

export default class EventForm extends React.Component {
  render() {
    return (<div>
      <h2>New event:</h2>
      <form onSubmit={this.props.onSubmit}>
        <label>
          Event name:
        <input type="text" value={this.props.values.name} onChange={this.props.onChange} name="name" />
        </label>
        <label>
          Event date:
        <input type="text" value={this.props.values.date} onChange={this.props.onChange} name="date" />
        </label>
        <label>
          Event description:
        <input type="text" value={this.props.values.description} onChange={this.props.onChange} name="description" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}