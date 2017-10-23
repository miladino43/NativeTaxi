import constants from './types';

const {
	PERSIST_UPDATE,
} = constants;

export const update = payload => ({
	type: PERSIST_UPDATE,
	payload,
});
