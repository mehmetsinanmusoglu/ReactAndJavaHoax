import React, { Component } from 'react';
import logo from '../assets/hoaxify.png';
import { Link, StaticRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { logoutSuccess } from '../redux/authActions';
// import { Authentication } from '../shared/AuthenticationContext';

class TopBar extends Component {
    // static contextType = Authentication;
    // onClickLogout = () => {
    //     this.props.dispatch(logoutSuccess());
    // }
    render() {
        const { t, username, isLoggedIn, onLogoutSuccess } = this.props
        let links = (
            <ul className='navbar-nav ml-auto'>
                <Link className='nav-link' to="/login">
                    <li>{t('Login')}</li>
                </Link>
                <Link className='nav-link' to="/singup">
                    <li>{t('Sing Up')}</li>
                </Link>

            </ul>
        );
        if (isLoggedIn) {
            links = (
                <ul className='navbar-nav ml-auto'>
                    <li>
                        <Link className='nav-link' to={"/user/" + username}>
                            {username}
                        </Link>
                    </li>
                    <li className='nav-link' onClick={onLogoutSuccess} style={{ cursor: 'pointer' }}>{t('Logout')}</li>
                </ul>

            )
        }
        return (
            <div className='shadow-sm bg-light mb-2'>

                <nav className="navbar navbar-light container navbar-expand">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="60" alt="Hoaxity Logo" />
                            Hoaxify
                        </Link>
                        {links}
                    </div>
                </nav>
            </div>
        );

    }
}
const TopBarWithTranslation = withTranslation()(TopBar);
const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogoutSuccess: () => dispatch(logoutSuccess())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopBarWithTranslation);