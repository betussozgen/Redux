//Reducer: createStore'ın ilk parametresi.

export default function (state, action) {
    switch (action.type) {
        case "ADD_LIST":
            const { name } = action.payload;
            const newList = [...state.nameList, name]
            return { ...state, nameList: newList }

        default:
            return state;
    }
}