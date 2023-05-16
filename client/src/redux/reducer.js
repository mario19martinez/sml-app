import {
  GET_ALL_LEAD,
  GET_LEAD_UNCHECKED,
  GET_LEAD_CHEQUED,
  GET_LEAD_UNCHECKED_10,
  GET_LEAD_CHEQUED_100,
  ORDER_CLIENTS,
} from "./actions";

const initialState = {
  lead: [],
  leadChequed: [],
  leadChequed100: [],
  leadUnchecked: [],
  leadUnchecked10: [],
  leaderDashboard: [],
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
    case GET_LEAD_UNCHECKED_10:
      return {
        ...state,
        leadUnchecked10: action.payload,
      };
    case GET_LEAD_CHEQUED:
      return {
        ...state,
        leaderDashboard: action.payload,
        leadChequed: action.payload,
      };
    case GET_LEAD_CHEQUED_100:
      return {
        ...state,
        leadChequed100: action.payload,
      };
    case ORDER_CLIENTS:
      const copy = [...state.leadChequed];
      if (action.payload === "DES") {
        copy.sort((a, b) => {
          const clientA = a.name ? a.name.toLowerCase() : "";
          const clientB = b.name ? b.name.toLowerCase() : "";
          return clientB.localeCompare(clientA, "default", {
            sensitivity: "accent",
          });
        });
      } else {
        copy.sort((a, b) => {
          const clientA = a.name ? a.name.toLowerCase() : "";
          const clientB = b.name ? b.name.toLowerCase() : "";
          return clientA.localeCompare(clientB, "default", {
            sensitivity: "accent",
          });
        });
      }
      console.log("termino orden");
      return {
        ...state,
        leaderDashboard: copy,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
