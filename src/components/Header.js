import React from 'react';
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { logout } from '../JS/Actions/AuthActions';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utilisez useNavigate pour obtenir la fonction de navigation

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <header className="header" style={{ backgroundColor: '#FF385C' }}>
      <div className="logo">
        <Link to="/" className="logo-link">
          <span className="logo-text">Airbnb</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/listings" className="nav-link">Listings</Link>
        {isAuth && <Link to="/profile" className="nav-link profile">Profile</Link>}
        {!isAuth && <Link to="/register" className="nav-link register">Register</Link>}
      </div>
      {isAuth ? (
        <>
          <div className="profile-icon">
            <RiAccountCircleLine size={33.33} />
          </div>
          <button onClick={() => dispatch(logout(navigate))} className="nav-btn logout">Logout</button> {/* Utilisez navigate dans le dispatch */}
        </>
      ) : (
        <Link to="/login" className="nav-btn login">Login</Link>
      )}
    </header>
  );
};

export default Header;
