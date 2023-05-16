import {
  GET_ALL_LEAD,
  GET_LEAD_UNCHECKED,
  GET_LEAD_CHEQUED,
  GET_LEAD_UNCHECKED_10,
  GET_LEAD_CHEQUED_100,
  ORDER_CLIENTS,
  ORDER_CATEGORY,
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
      const copyClient = [...state.leadChequed];
      if (action.payload === "DES") {
        copyClient.sort((a, b) => {
          const clientA = a.name ? a.name.toLowerCase() : "";
          const clientB = b.name ? b.name.toLowerCase() : "";
          return clientB.localeCompare(clientA, "default", {
            sensitivity: "accent",
          });
        });
      } else {
        copyClient.sort((a, b) => {
          const clientA = a.name ? a.name.toLowerCase() : "";
          const clientB = b.name ? b.name.toLowerCase() : "";
          return clientA.localeCompare(clientB, "default", {
            sensitivity: "accent",
          });
        });
      }
      return {
        ...state,
        leaderDashboard: copyClient,
      };
    case ORDER_CATEGORY:
      const copyCategory = [...state.leadChequed];
      if (action.payload === "DES") {
        copyCategory.sort((a, b) => {
          const clientA = a.category ? a.category.toLowerCase() : "";
          const clientB = b.category ? b.category.toLowerCase() : "";
          return clientB.localeCompare(clientA, "default", {
            sensitivity: "accent",
          });
        });
      } else {
        copyCategory.sort((a, b) => {
          const clientA = a.category ? a.category.toLowerCase() : "";
          const clientB = b.category ? b.category.toLowerCase() : "";
          return clientA.localeCompare(clientB, "default", {
            sensitivity: "accent",
          });
        });
      }
      return {
        ...state,
        leaderDashboard: copyCategory,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
