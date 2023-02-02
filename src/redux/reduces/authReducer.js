import { SET_AUTH_STATE, SET_CURRENT_USER, SET_LOADING_STATUS } from '../actions/types'

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  isLoading: true,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_STATE:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
