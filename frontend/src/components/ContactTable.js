import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Box, TextField, Modal } from '@mui/material';
import axios from 'axios';

const ContactTable = ({ fetchContacts, contacts }) => {
    const [editingContact, setEditingContact] = useState(null);
    const [formData, setFormData] = useState({});

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/contacts/${id}`);
            fetchContacts();
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleEditClick = (contact) => {
        setEditingContact(contact._id); 
        setFormData(contact); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/contacts/${editingContact}`, formData);
            setEditingContact(null); 
            fetchContacts();
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleCancel = () => {
        setEditingContact(null); 
        setFormData({});
    };

    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        {['First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Job Title', 'Actions'].map((head) => (
                            <TableCell key={head}>{head}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact._id}>
                            {Object.keys(contact).slice(1, -2).map((key) => (
                                <TableCell key={key}>
                                    {editingContact === contact._id ? (
                                        <TextField
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                    ) : (
                                        contact[key]
                                    )}
                                </TableCell>
                            ))}
                            <TableCell>
                                {editingContact === contact._id ? (
                                    <>
                                        <Button variant="contained" color="primary" onClick={handleSave}>
                                            Save
                                        </Button>
                                        <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ ml: 1 }}>
                                            Cancel
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleEditClick(contact)}
                                            sx={{ mr: 1 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleDelete(contact._id)}
                                        >
                                            Delete
                                        </Button>
                                    </>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default ContactTable;
