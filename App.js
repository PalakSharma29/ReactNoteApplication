import React, { useState } from 'react'
import NoteContainer from './Component/Note/NoteContainer/NoteContainer'
import Sidebar from './Component/Note/Sidebar/Sidebar'

import './App.css';
export default function App() {
  const [notes,setNotes]= useState([]);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  }

  const deletNote = (id)=>{
    const tempNotes=[...notes]

    const index = tempNotes.findIndex((item) => item.id === id);
     if(index<0)return

     tempNotes.splice(index,1)
     setNotes(tempNotes)
  }

  return (
    <div className='App'>
        <Sidebar addNote = {addNote}/>
      <NoteContainer notes={notes}
      deleteNote={deletNote}/>
    </div>
  )
}

