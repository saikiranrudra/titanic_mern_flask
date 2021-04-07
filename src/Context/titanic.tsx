import React, { useReducer, FC } from "react";
import titanic from "./../Apis/titanic";

// Types

type actionType = {
    type: string,
    payload: any
}

type initialStateType = Array<Array<Array<string>>>;


const reducer = (state: Array<Array<Array<string>>>, action: actionType) => {
    switch (action.type) {
        case "GET_DATA":
            return action.payload;
        default:
            return state;
    }
}



const contextProvider = () => {
    const Context  = React.createContext<{ 
        state: initialStateType, 
        actions: any
    }>({
        state: [[["no-data"]]],
        actions: {}
    });

    const Provider: FC = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, [[["no-data"]]]);

        const getData = async () => {
            try {
                const res = await titanic.get("/tableData");
                const data: initialStateType = res.data.data;
                dispatch({ type: "GET_DATA", payload: data });
            } catch(err) {
                console.log("FETCH_TABLE_DATA_ERROR", err);
            }
        }
        
        const actions: any = { getData } 

        return (
            <Context.Provider value={{ state, actions }}>
                {children}
            </Context.Provider>
        )
    };

    return { Context, Provider }
}

export const { Context, Provider } = contextProvider();