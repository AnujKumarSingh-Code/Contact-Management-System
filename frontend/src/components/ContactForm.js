import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const ContactForm = ({ fetchContacts }) => {
    const [contact, setContact] = useState({
        firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: ''
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/contacts', contact);
            fetchContacts();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['firstName', 'lastName', 'email', 'phone', 'company', 'jobTitle'].map((field) => (
                <TextField
                    key={field}
                    name={field}
                    label={field.replace(/^\w/, (c) => c.toUpperCase())}
                    value={contact[field]}
                    onChange={handleChange}
                    required={field === 'firstName' || field === 'email'}
                />
            ))}
            <Button variant="contained" type="submit">Add Contact</Button>
        </Box>
    );
};

export default ContactForm;
