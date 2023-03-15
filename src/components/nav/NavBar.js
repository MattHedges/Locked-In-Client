import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Tickets</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/learning">Learning</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/contribute">Contribute</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/posts">Community Posts</Link>
            </li>

          
            <li className="navbar__item active">
                <Link className="navbar__link" to="/resources">Community Resources</Link>
            </li>


            {
                localStorage.getItem("lockedin_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("lockedin_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}