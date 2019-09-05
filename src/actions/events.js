import request from 'superagent'

export const EVENTS_FETCHED = "EVENTS_FETCHED"
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_FETCHED = 'EVENT_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = eventsArray => ({
  type: EVENTS_FETCHED,
  payload: eventsArray
})

export const loadEvents = () => (dispatch, getState) => {
  // if events are already loaded in store
  if (getState().events) { return }
  // else:
  request(`${baseUrl}/event`)
    .then(response => {
      console.log("This is an array of all events:", response.body)
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
})

export const createEvent = (eventData) => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(eventData)
    .then(response => {
      console.log("this is posting response:", response)
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)

}

const eventFetched = event => ({
  type: EVENT_FETCHED,
  payload: event
})

export const loadEvent = (id) => dispatch => {
  request(`${baseUrl}/event/${id}`)
    .then(response => {
      console.log("This is the requested event:", response.body)
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}