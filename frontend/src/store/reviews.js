import { useSelector } from "react-redux"
import { csrfFetch } from "./csrf"

const GET_REVIEWS = 'GET_REVIEWS'

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews
})

export const useReviews = () => {
  return useSelector(state => Object.values(state.reviews))
}

export const getReviewsBySpotIdThunk = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`)

  if (res.ok) {
    let reviews = await res.json()
    dispatch(getReviews(reviews.Reviews))
  }
}

const reviewReducer = (state = {}, payload) => {
  let newReviewState = {}
  switch (payload.type) {
    case GET_REVIEWS:
      payload.reviews.forEach(review => {
        newReviewState[review.id] = review
      })
      return newReviewState
    default:
      return state
  }
}

export default reviewReducer
