//Reducer: createStore'ın ilk parametresi.

export default function (state, action) {
    switch (action.type) {
        case "ADD_NAME":
            const { name } = action.payload;
            const newList = [...state.nameList, name]
            return { ...state, nameList: newList }

        case "CLEAN_LIST":
            return { ...state, nameList: [] }

        case "SET_USERNAME":
            return { ...state, userName: action.payload.userName }


        default:
            return state;
    }
}