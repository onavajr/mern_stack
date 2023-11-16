const PortfolioDetails = ({ portfolio }) => {

    return (
        <div className="portfolio-details">
            <h4>{portfolio.title}</h4>
            <p><strong>Address: </strong>{portfolio.address}</p>
            <p><strong>Phone: </strong>{portfolio.phone}</p>
            <p>{portfolio.createdAt}</p>


        </div>
    )
}

export default PortfolioDetails