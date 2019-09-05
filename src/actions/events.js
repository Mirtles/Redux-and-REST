import request from 'superagent'

export const EVENTS_FETCHED = "EVENTS_FETCHED"

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
      console.log("this is server response.body array:", response.body)
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)

}