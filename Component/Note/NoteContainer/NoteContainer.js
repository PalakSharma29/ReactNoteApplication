import React from 'react'
import Note from '../Note'

import './NoteContainer.css'

export default function NoteContainer(props) {

  const reverseArr = (arr)=>{
    const array=[]

    for(let i=arr.length-1; i>=0; --i){
      array.push(arr[i]);
    }
    return array
  }

  const notes = reverseArr(props.notes)
  return (
    <div className='note-container custom-scroll'>
        <div className='note-container_text'>
          
          {notes.length>0 ? notes.map((item)=>( <Note  key={item.id}  note={item}
          deleteNote={props.deleteNote} />))
           :<h2>create Notes</h2>
        }
      </div>
    </div>
  )
}
