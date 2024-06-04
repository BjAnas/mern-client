// Profile.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
    // Gestionnaire d'événement pour le bouton "Modifier le profil"
    const handleEditProfile = () => {
        // Logique pour l'édition du profil
        console.log("Édition du profil en cours...");
    };

    // Gestionnaire d'événement pour le bouton "Créer une annonce"
    const handleCreateListing = () => {
        // Logique pour la création d'une annonce
        console.log("Création d'une annonce en cours...");
    };

    return (
        <div className="profile-page">
            <Container className="profile-container">
                <Row>
                    <Col md={4}>
                        <Card className="profile-card">
                            <Card.Body>
                                <div className="profile-avatar">
                                    <img src="/avatar.png" alt="Avatar" />
                                </div>
                                <h3>Votre Profil</h3>
                                <p>Bienvenue sur votre page de profil</p>
                                {/* Ajouter l'événement onClick pour le bouton "Modifier le profil" */}
                                <Button variant="primary" onClick={handleEditProfile}>Modifier le profil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card className="listings-card">
                            <Card.Body>
                                <h3>Vos Annonces</h3>
                                <p>Vous n'avez pas encore d'annonces.</p>
                                {/* Ajouter l'événement onClick pour le bouton "Créer une annonce" */}
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
