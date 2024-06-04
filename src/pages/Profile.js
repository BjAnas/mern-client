// Profile.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom'; // Importez Link et useNavigate
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate(); // Utilisez useNavigate pour la navigation

    const handleEditProfile = () => {
        navigate('/edit-profile'); // Redirige vers la page de modification de profil
    };

    const handleCreateListing = () => {
        navigate('/create-listing'); // Redirige vers la page de création d'annonce
    };

    return (
        <div className="profile-page">
            <Container className="profile-container">
                <Row>
                    <Col md={4}>
                        <Card className="profile-card">
                            <Card.Body>
                                <div className="profile-avatar">
                                    <img src="/images/avatar.jpg" alt="Avatar" className="avatar-img" />
                                </div>
                                <h3>Votre Profil</h3>
                                <p>Bienvenue sur votre page de profil</p>
                                {/* Utilisez Link pour rediriger vers la page de modification de profil */}
                                <Button variant="primary" onClick={handleEditProfile}>Modifier le profil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card className="listings-card">
                            <Card.Body>
                                <h3>Vos Annonces</h3>
                                <p>Vous n'avez pas encore d'annonces.</p>
                                {/* Utilisez Link pour rediriger vers la page de création d'annonce */}
                                <Button variant="primary" onClick={handleCreateListing}>Créer une annonce</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;
