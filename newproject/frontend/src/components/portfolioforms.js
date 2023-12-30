import { useState } from "react"
import { usePortfolioContext } from "../hooks/usePortfolioContext"

const PortfolioForm = () => {
    const { dispatch } = usePortfolioContext()

    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const portfolio = {title, address, phone}
        
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
            console.log('portfolio added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Your Company</h3>
            <label>Job Title: 
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            </label>

            <label>Address: 
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />
            </label>
            <label>Phone: 
            <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
            />
            </label> 
            
            <button>Add Company</button>
            {error && <div className="error">{error}/</div>}
        </form>
    )
}

export default PortfolioForm