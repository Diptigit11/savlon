import React, { useState } from 'react';

const Addtask = (props) => {
  const [note, setNote] = useState({ title: "", description: "", tag: "", date: "", priority: "low" });

  const addNote = async (title, description, tag, date, priority) => {
    try {
      // API call
      const response = await fetch(`http://localhost:8000/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag, date, priority }),
      });
      const note = await response.json();
      console.log(note);
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
    addNote(note.title, note.description, note.tag, note.date, note.priority);
    // Clear the form fields
    setNote({ title: "", description: "", tag: "", date: "", priority: "low" });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Add a Note</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title</label>
            <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
            <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-4">
            <label htmlFor="tag" className="block text-sm font-semibold text-gray-600">Tag</label>
            <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="tag" name="tag" value={note.tag} onChange={onChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-semibold text-gray-600">Date</label>
            <input type="date" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="date" name="date" value={note.date} onChange={onChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block text-sm font-semibold text-gray-600">Priority</label>
            <select name="priority" id="priority" className="form-select mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" value={note.priority} onChange={onChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="btn bg-cyan-400 text-black px-4 py-2 rounded-md hover:bg-cyan-500" disabled={note.title.length < 5 || note.description.length < 5}>Add note</button>
        </form>
      </div>
    </div>
  );
}

export default Addtask;
