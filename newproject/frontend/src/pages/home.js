import { useEffect, useState} from 'react'

const Home = () => {
    const [portfolios, setPortfolios] = useState(null)
    useEffect(() => {
        const fetchPortfolios = async () => {
            const response = await fetch('/api/newproject')
            const json = await response.json()

            if (response.ok) {
                setPortfolios(json)
            }
        }

        fetchPortfolios()
    }, [])

    return (
        <div className="home">
            <div className='portfolios'>
            {portfolios && portfolios.map((portfolio) => (
                <p key={portfolio._id}>{portfolio.title}</p>
            ))}
            </div>
        </div>
    )
}

export default Home