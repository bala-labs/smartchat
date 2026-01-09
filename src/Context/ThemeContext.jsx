import { createContext, useReducer } from "react";
import { themeReducer, initialState } from "../Reducer/themeReducer";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;