import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        // {id: 1, text: 'salary', amount: 1200},
        // {id: 2, text: 'got prize', amount: 200},
        // {id: 3, text: 'rent of car', amount: 900}
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions 
    function DeleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        DeleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}



