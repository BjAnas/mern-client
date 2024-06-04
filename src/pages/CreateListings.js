import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CreateListings.css';
import axios from 'axios'; // Importez axios pour effectuer des requêtes HTTP

const CreateListing = () => {
    const [title, setTitle] = useState(''); // État pour le titre de l'annonce
    const [description, setDescription] = useState(''); // État pour la description de l'annonce

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        try {
            // Effectuer une requête POST au serveur pour enregistrer les données de l'annonce
            const response = await axios.post('/api/user/listings', {
                title,
                description
            });

            console.log(response.data); // Afficher la réponse du serveur dans la console
            // Vous pouvez ajouter ici des actions supplémentaires après la création de l'annonce

        } catch (error) {
            console.error('Error creating listing:', error); // Afficher une erreur en cas d'échec de la requête
            // Vous pouvez gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
        }
    };

    return (
        <div className="create-listing-page">
            <Container className="create-listing-container">
                <Row>
                    <Col md={12}>
                        <Card className="create-listing-card">
                            <Card.Body>
                                <h3>Créer une annonce</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Titre</label>
                                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                    </div>
                                    <Button type="submit" variant="primary">Créer l'annonce</Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CreateListing;
