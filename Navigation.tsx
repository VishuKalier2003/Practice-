import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/WhatsApp">WhatsApp</Link>
            </li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Discord</li>
        </ul>
    )
}