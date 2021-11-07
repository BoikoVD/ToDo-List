const defaultState = {
	onModal: false,
	modalType: '',
	task: {},
}

export const modalReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ON_MODAL":
			return { ...state, onModal: action.onModal, modalType: action.modalType, task: action.task };
		case "CLOSE_MODAL":
			return { ...state, onModal: action.onModal };
		default: return state;
	}
}