import { useEffect } from 'react'
import { usePortfolioContext } from '../hooks/usePortfolioContext'

//components
import PortfolioDetails from '../components/portfoliodetails'
import PortfolioForm from '../components/portfolioforms'

const Home = () => {
    const {portfolios, dispatch } = usePortfolioContext()

    useEffect(() => {
        const fetchPortfolios = async () => {
            const response = await fetch('/api/newproject')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PORTFOLIO', payload: json})
            }
        }  

        fetchPortfolios()
    }, [])

    return (
        <div className="home">
            <div className="portfolios">
            {portfolios && portfolios.map((portfolio) => (
                <p key={portfolio._id}>{portfolio.title}</p>,
                <p key={portfolio._id}>{portfolio.number}</p>,
                <p key={portfolio._id}>{portfolio.address}</p>,
                <PortfolioDetails key={portfolio._id} portfolio={portfolio}/>
            ))}
            </div>
            <PortfolioForm/>
        </div>
    )
}

export default Home