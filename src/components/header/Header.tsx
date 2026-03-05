import Logo from '../../assets/logo.png';
import './header.css';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn,faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const accessToken = localStorage.getItem('accessToken');


    return (
        <>
            <div className='header'>
                <div className="left">
                    <img src={Logo} className='imageLogo' alt="Logo" />
                    <h3>Météday</h3>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <Link to='/' className='no-under'> Home</Link>
                        </li>
                        <li>
                            <Link to='/details' className='no-under'> Details</Link>
                        </li>
                        <li>
                            <Link to='/about' className='no-under'> About</Link>
                        </li>
                        {accessToken ? 
                            <Link to='/profile' className='no-under'><FontAwesomeIcon icon={faUserCircle} size='lg'/> </Link>
                            :
                            <Link to='/login' className='no-under'><FontAwesomeIcon icon={faSignIn} size='lg'/> </Link>                            
                        }
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header;