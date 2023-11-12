import { useState } from "react"

const PortfolioForm = () => {
    const [title, setTitle] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const portfolio = {title,address,phone}
        
        const response = await fetch('/api/portfolio', {
            method: 'POST',
            body: JSON.stringify(portfolio),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            setTitle('')
            setAddress('')
            setPhone('')
            setError(null)
            console.log('portfolio added', json.error)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Your Company</h3>
            <label>Job Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Address</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />

            <label>Phone</label>
            <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
            />

            <button>Add Company</button>
            {error && <div className="error">{error}/</div>}
        </form>
    )
}

export default PortfolioForm