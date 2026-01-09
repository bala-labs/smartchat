export const initialState = {theme: localStorage.getItem("theme") || "light"}

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'light': 
            return {theme: "light"};
        case 'dark':
            return {theme: "dark"};
        default:
            return state;
    }
}