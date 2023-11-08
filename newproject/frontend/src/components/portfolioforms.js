import { useState } from "react"

const PortfolioForm = () => {
    const [title, setTitle] = useState('')
    const [position, setPosition] = useState('')
    const [address, setAddress] = useState('')

    return (
        <form className="create">
            <h3>Add a New Portfolio</h3>
            <label>Portfolio Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
        </form>
    )
}