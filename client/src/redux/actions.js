import axios from 'axios';
export const SET_LEAD = 'SET_LEAD';
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';

export const setLead = (lead) => ({
	type: SET_LEAD,
	payload: lead,
});

export const fetchLead = () => {
	return (dispatch) => {
		return axios
			.get('http://localhost:3001/lead')
			.then((response) => {
				const lead = response.data;
				dispatch(setLead(lead));
			})
			.catch((error) => console.log(error));
	};
};

export const fetchLeadSuccess = (leadData) => {
	return {
		type: FETCH_LEAD_SUCCESS,
		payload: leadData,
	};
};
