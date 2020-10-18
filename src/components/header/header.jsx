import React from 'react';
import './header.style.scss';
import {auth} from "../../firebase/firebase.utils";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link classname='logo-container' to='/'>
            <Logo classname='logo'/>
        </Link>
        <div className='options'>
            <Link classname='option' to='/shop'>
                SHOP
            </Link>
            <Link classname='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link classname='option' to='./signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;