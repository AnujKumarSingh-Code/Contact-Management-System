import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import axios from 'axios';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/contacts');
            setContacts(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Contact Management</h1>
            <ContactForm fetchContacts={fetchContacts} />
            <ContactTable fetchContacts={fetchContacts} contacts={contacts} />
        </div>
    );
};

export default App;
