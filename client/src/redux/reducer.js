import { GET_ALL_LEAD, GET_LEAD_UNCHECKED, GET_LEAD_CHEQUED } from "./actions";

const initialState = {
  lead: [],
  leadChequed: [],
  leadUnchecked: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LEAD:
      return {
        ...state,
        lead: action.payload,
      };
    case GET_LEAD_UNCHECKED:
      return {
        ...state,
        leadUnchecked: action.payload,
      };
    case GET_LEAD_CHEQUED:
      return {
        ...state,
        leadChequed: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
