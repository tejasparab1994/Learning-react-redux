import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
    console.log("reducer");
      return {
        ...state,
        items: action.payload
      }
    case NEW_POSTS:
    console.log("hello in new reducer");
    return {
      ...state,
      item: action.payload
    }
    default:
      return state;
  }
}
