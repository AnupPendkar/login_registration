import { useDispatch} from 'react-redux';
import { logout } from "../redux/UserSplice";
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(logout());
        navigate("/");
    }
    return (  
        <div className="welcome">
            <p className="greetings">Hey congrats!!! You have successfully Logged In</p>
            <button onClick={handleLogout} className="btn logout">Logout</button>
        </div>
    );
}

export default Welcome;