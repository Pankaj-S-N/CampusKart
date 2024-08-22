import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>CampusKART</h1>
                </Link>
                <nav>
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