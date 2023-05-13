import { SET_LEAD, FETCH_LEAD_SUCCESS } from './actions';

const initialState = {
	lead: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LEAD:
			return {
				...state,
				lead: action.payload,
			};
		case FETCH_LEAD_SUCCESS:
			return {
				...state,
				leadData: action.payload,
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
