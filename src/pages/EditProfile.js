import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour mettre à jour le profil
        console.log('Nouvelles informations du profil :', formData);
    };

    return (
        <Container>
            <h2>Modifier le Profil</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre nom" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control type="email" placeholder="Entrez votre adresse email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formUsername">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre nom d'utilisateur" name="username" value={formData.username} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enregistrer les modifications
                </Button>
            </Form>
        </Container>
    );
};

export default EditProfile;
