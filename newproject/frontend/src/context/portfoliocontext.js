import { createContext, useReducer } from 'react'

export const PortfolioContext = createContext()

export const portfolioReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PORTFOLIO':
            return {
                portfolio: action.payload
            }
            case 'CREATE_PORTFOLIO':
                return {
                    portfolio: [action.payoad, ...state.portfolio]
                }
                default:
                    return state
    }
}

export const PortfolioContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(portfolioReducer,{
        portfolio: null
    })

    return (
        <PortfolioContext.Provider value={{...state, dispatch}}>
            { children } 
        </PortfolioContext.Provider>
    )
}