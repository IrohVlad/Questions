import React, {useContext} from 'react';
import logo from '../assets/logo.svg'
import { useNavigate} from 'react-router-dom';
import { auth, IAuthContext } from '../App';


const Header = () => {
    const {isAuth, setIsAuth}: IAuthContext = useContext(auth)
    const navigate = useNavigate();
    return (
        <header>
            <div className="header _container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav nav">
                    {isAuth ? <li onClick={()=>{navigate('/staff')}} className="nav__item">Сотруднику</li> : <></>}
                    {isAuth ? <li onClick={()=>{setIsAuth(false)}} className="nav__item">Выйти</li> : <li onClick={()=>{navigate('/register')}} className="nav__item">Регистрация</li>}
                </ul>
            </div>
        </header>
    );
};

export default Header;