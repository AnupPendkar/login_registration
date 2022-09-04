import "./navbar.css";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navbar() {
    const user = useSelector(state=>state.user.isUser);
    return (  
        <nav>
            <h1 className="logo">REACT</h1>
            <ul className="link-list">
                {user ? 
                    <li className="link">Anup</li>
                :
                <>
                    <li className="link">
                        <Link to="/">Login</Link>
                    </li>
                    <li className="link">
                        <Link to="/register">Register</Link>
                    </li>
                </>
                }
            </ul>
        </nav>
    );
}

export default Navbar;