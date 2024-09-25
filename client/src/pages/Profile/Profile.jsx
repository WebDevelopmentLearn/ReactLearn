
import styles from './Profile.module.scss';
import {Navbar} from "../../components";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {logout} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";


export const Profile = () => {

    const token = localStorage.getItem('token');
    const tokenData = token ? jwtDecode(token) : null;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(tokenData);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }
    return (
        <div>
            <Navbar />
            <div className={styles.ProfileContainer}>
                <h1>Profile</h1>
                <p>Userid: {tokenData.user.id}</p>

                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )
}