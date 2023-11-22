import { useEffect, useState} from 'react'

//components
import PortfolioDetails from '../components/portfoliodetails'
import PortfolioForm from '../components/portfolioforms'

const Home = () => {
    const [portfolios, setPortfolios] = useState(null)
    useEffect(() => {
        const fetchPortfolios = async () => {
            const response = await fetch('/api/portfolio')
            const json = await response.json()

            if (response.ok) {
                setPortfolios(json)
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