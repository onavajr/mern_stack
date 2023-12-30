import { PortfolioContext } from "../context/portfoliocontext";
import { useContext } from "react";

export const usePortfolioContext = () => {
    const context = useContext(PortfolioContext)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutContextProvider')
    }
    

    return context
}