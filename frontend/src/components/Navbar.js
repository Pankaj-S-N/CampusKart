import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {

    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>CampusKART</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    <div>
                        <Link to= "/login">Login</Link>
                        <Link to= "/signup">Signup</Link> 
                        {/* added links as per the routes file */}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar