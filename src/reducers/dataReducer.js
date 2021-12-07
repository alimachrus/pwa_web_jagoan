const initialState = {
  list: [],
  loading: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, list: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
