import { createContext } from 'react'

export const PortfolioContext = createContext()

export const PortfolioContextProvider = ({ children }) => {

    return (
        <PortfolioContext.Provider >
            { children }
        </PortfolioContext.Provider>
    )
}