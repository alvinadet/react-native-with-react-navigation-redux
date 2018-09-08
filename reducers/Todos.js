//state
const initialStateData = {
    todos: [],
    loading: true
};
//Reducer
export default function (state = initialStateData, action) {
    switch (action.type) {
        case 'ALL_TODOS_PENDING':
            state = { ...state, loading: true };
            break;

        case 'ALL_TODOS_FULFILLED':
            state = { ...state, todos: action.payload.data, loading: false };
            break;

        default:
    }
    return state;
};