import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Showtask = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [cardColor, setCardColor] = useState('#ffffff'); // Default color
    const [notes, setNotes] = useState([]);
    const host = "http://localhost:8000"; // Define the host URL of your backend API
    const options = ['High', 'Moderate', 'Low'];

    useEffect(() => {
        const getNotes = async () => {
            try {
                //Api call
                const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                    method: "GET", 
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    },
                });
                const json = await response.json();
                console.log(json);
                setNotes(json);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };
        getNotes();
    }, []); // Run once on component mount

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOptionClick = async (option, id) => {
        setSelectedOption(option);
        setAnchorEl(null);
        // Set card color based on selected priority
        switch (option) {
            case 'High':
                setCardColor('#ffcccc'); // Red color
                break;
            case 'Moderate':
                setCardColor('#ffffcc'); // Yellow color
                break;
            case 'Low':
                setCardColor('#ccffcc'); // Green color
                break;
            default:
                setCardColor('#ffffff'); // Default color
        }

        // Delete the note associated with the checkbox
        await deleteNote(id);
    };

    const deleteNote = async (id) => {
        try {
            // Api call
            await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                }
            });
            // Update the notes state after deletion
            const newNotes = notes.filter((note) => note._id !== id);
            setNotes(newNotes);
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div>
            {notes.map((note) => (
                <Card key={note._id} variant="outlined" sx={{ maxWidth: 360, backgroundColor: cardColor }} className='ml-20 mt-12'>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                                {note.title}
                            </Typography>
                        </Stack>
                        <Typography color="text.secondary" variant="body2">
                            {note.description}
                        </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="body2">
                            Select type
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            {/* Checkbox */}
                            <Checkbox {...label} onClick={() => handleOptionClick(selectedOption, note._id)} />

                            {/* Edit icon */}
                            <EditIcon />

                            {/* Dropdown */}
                            <Button onClick={handleClick} variant="outlined" color="primary">
                                Select Priority
                            </Button>
                            <Menu
                                id="options-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                    style: {
                                        zIndex: 9999,
                                    },
                                }}
                            >
                                {options.map((option, index) => (
                                    <MenuItem key={index} onClick={() => handleOptionClick(option, note._id)}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Stack>
                    </Box>
                </Card>
            ))}
        </div>
    );
};

export default Showtask;
