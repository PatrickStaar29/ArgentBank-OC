import { Link } from 'react-router-dom'
import Logo from './image/argentBankLogo.png'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import { useSelector } from 'react-redux';


function Header (){
    const dispatch = useDispatch()

    const handleLogout = () => {
      dispatch(logoutUser())
    }
    
    const isLogoutVisible = location.pathname === '/' || location.pathname === '/login'
    const isSignInVisible = location.pathname === '/profile' 

    const userName = useSelector((state) => state.user.userName);
    return(
        <header className='main-header'>
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
            <nav className="main-nav">
                <li className={`main-nav-item ${isSignInVisible ? 'textdisplay' : ''}`}>
                    <Link to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </li>
                <li className={`main-nav-username ${isLogoutVisible ? 'textdisplay' : ''}`}>
                    {userName}
                </li>
                <li className={`main-nav-item ${isLogoutVisible ? 'textdisplay' : ''}`}>
                    <Link to="/" onClick={handleLogout}>
                        Logout
                    </Link>
                </li>
            </nav>
        </header>
    )
}
export default Header