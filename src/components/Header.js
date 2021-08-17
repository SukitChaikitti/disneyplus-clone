import React from 'react';
import './Header.css';
import { selectUserName , selectUserPhoto , setSignIn , selectUserEmail} from '../features/user/userSlice';
import { useSelector } from 'react-redux';
import { auth , provider} from '../firebase';
import { useDispatch } from 'react-redux';

function Header() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    console.log(userName);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {

            let user = result.user
            dispatch(setSignIn({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
        })

        
    }

    return (
        <div className = 'header'>
            
            <img  className = 'header__logo' src = '/images/logo.svg'></img>
            {userName ? <><div className = 'header__nav'>
                <a className = 'header__item'>
                    <img src = '/images/home-icon.svg'></img>
                    <span>HOME</span>
                </a>
                <a className = 'header__item'>
                    <img src = '/images/search-icon.svg'></img>
                    <span>SEARCH</span>
                </a>
                <a className = 'header__item'>
                    <img src = '/images/watchlist-icon.svg'></img>
                    <span>WATCHLIST</span>
                </a>
                <a className = 'header__item'>
                    <i mg src = '/images/original-icon.svg'></i>
                    <span>ORIGINALS</span>
                </a>
                <a className = 'header__item'>
                    <img src = '/images/movie-icon.svg'></img>
                    <span>MOVIES</span>
                </a>
                <a className = 'header__item'>
                    <img src = '/images/series-icon.svg'></img>
                    <span>SERIES</span>
                </a>
            </div>
            <img className = 'header__profile' src = {userPhoto}/>
            </>

        : <div className = 'login' onClick = {signIn}>Log In</div>}
     
        </div>
    )
}

export default Header
