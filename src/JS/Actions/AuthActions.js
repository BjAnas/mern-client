import axios from 'axios';
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../ActionTypes/ActionTypes';

// Fonction pour s'enregistrer
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        // Appel à l'API pour s'enregistrer
        const result = await axios.post('/api/user/Register', newUser);
        dispatch({ type: REGISTER_USER, payload: result.data });
        // Navigation vers la page d'accueil après l'enregistrement
        navigate('/');
    } catch (error) {
        // Gestion des erreurs
        if (error.response && error.response.data && error.response.data.errors) {
            dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        } else {
            dispatch({ type: FAIL_USER, payload: { errors: { message: 'Une erreur s\'est produite lors de l\'inscription.' } } });
        }
    }
};

// Fonction pour se connecter
export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        // Appel à l'API pour se connecter
        const result = await axios.post('/api/user/login', user);
        dispatch({ type: LOGIN_USER, payload: result.data });
        // Navigation vers le profil après la connexion
        navigate('/profile');
    } catch (error) {
        // Gestion des erreurs
        if (error.response && error.response.data && error.response.data.errors) {
            dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        } else {
            dispatch({ type: FAIL_USER, payload: { errors: { message: 'Une erreur s\'est produite lors de la connexion.' } } });
        }
    }
};

// Fonction pour se déconnecter
export const logout = (navigate) => async (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    // Navigation vers la page d'accueil après la déconnexion
    navigate('/');
};

// Fonction pour récupérer les informations de l'utilisateur actuellement connecté
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        // Configuration de l'en-tête avec le token d'authentification
        const config = {
            headers: { token: localStorage.getItem('token') }
        };
        // Appel à l'API pour récupérer les informations de l'utilisateur
        let result = await axios.get('/api/user/current', config);
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        // Gestion des erreurs
        if (error.response && error.response.data && error.response.data.errors) {
            dispatch({ type: FAIL_USER, payload: error.response.data.errors });
        } else {
            dispatch({ type: FAIL_USER, payload: { errors: { message: 'Une erreur s\'est produite lors de la récupération des informations utilisateur.' } } });
        }
    }
};
