import { useState, useEffect } from 'react';
import api from '../api';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")
        .then((res) => res.data)
        .then((data) => { setNotes(data); console.log(data); })
        .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
        .then((res) => {
            if(res.status === 204) alert("Note was deleted");
            else alert("Failed to delete note");
            getNotes();
        }).catch((error) =>  alert(error))
    }

    const createNote = (e) => {
        e.preventDefault();
        api.post("/api/notes/", {content, title}).then((res) => {
            if(res.status === 201) alert("Note created successfully!");
            else alert("Error creating the note.");
            getNotes();
        }).catch((error) => alert(error))
    }

  return (
    <>
        <div>
            <h2>Notes</h2>
        </div>
        <h2>Create a Note</h2>
        <form action="" onSubmit={createNote}>
            <label htmlFor="title">Title: </label>
            <br />
            <input type="text" id='title' name='title' required onChange={(e) => setTitle(e.target.value)} value={title} />
            <br />
            <label htmlFor="content">Content: </label>
            <br />
            <textarea id='content' name='content' required onChange={(e) => setContent(e.target.value)} value={content} />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default Home