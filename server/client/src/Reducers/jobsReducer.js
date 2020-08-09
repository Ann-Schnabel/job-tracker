import { GET_JOBS } from "../Actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_JOBS:
      return action.payload.data || state;
    default:
      return state;
  }
}