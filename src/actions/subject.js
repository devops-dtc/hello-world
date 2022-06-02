import { SET_SUBJECT} from "./types";

export const setSubject = (subject) => ({
  type: SET_SUBJECT,
  payload: subject,
});

