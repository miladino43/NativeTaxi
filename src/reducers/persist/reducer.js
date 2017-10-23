import constants from './types';

const {
	PERSIST_UPDATE,
} = constants;

export const initialState = {
	isHydrated: false,
};


export function reducer(state = initialState, action) {
	switch (action.type) {
		case PERSIST_UPDATE:
			return action.payload;
		default:
			return state;
	}
}
