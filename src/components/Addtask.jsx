import React, { useContext, useState } from 'react';

const Addtask = (props) => {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const host = "http://localhost:8000"; // Define the host URL of your backend API

  const addNote = async (title, description, tag, date) => {
    try {
      //Api call
      const response = await fetch(`http://localhost:8000/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title , description, tag,date }),
      });
      const note = await response.json();
      console.log(note)
      // Handle the response if needed
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call addNote function with the values from note state
    addNote(note.title, note.description, note.tag, note.date);
    // Clear the form fields
    setNote({ title: "", description: "", tag: "" });
  }

  return (
    <div className="container px-[50vh] my-5">
      <h1 className="text-2xl font-bold">Add a Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-5">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="date" className="form-control" id="date" name="date" value={note.tdate} onChange={onChange} />
        </div>
        <button type="submit" className="btn bg-cyan-400 text-black" disabled={note.title.length < 5 || note.description.length < 5}>Add note</button>
      </form>
    </div>
  );
}

export default Addtask;
