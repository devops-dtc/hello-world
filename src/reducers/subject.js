import { SET_SUBJECT } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SUBJECT:
      return { subject: payload.subject };

    default:
      return state;
  }
}