const defaultState = {
	isLogined: false,
	userName: '',
	tasks: [],
}

export const currentUserReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "IS_LOGINED":
			return { ...state, isLogined: action.isLogined, userName: action.userName, tasks: action.tasks };
		case "MODIFY_TASKS":
			return { ...state, tasks: action.tasks };
		default: return state;
	}
}