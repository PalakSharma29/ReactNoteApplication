import React from 'react'
import './Note.css'

export default function Note(props) {

   const  formatDate =(value)=>{
    if(!value) return ""

    const date = new Date(value)

    const monthNames =[
      "Jan", "Feb", "March", "April", "May", "June","July", "Aug", "sep","Oct", "Nov","Dec"
    ];

    let hrs = date.getHours()
    let amPm = hrs > 12 ? "PM":"AM";
    hrs = hrs?hrs:"12"
    hrs = hrs>12?(hrs = 24 - hrs) : hrs

    let min = date.getMinutes();
    min = min<10?"0"+min:min

    let day = date.getDate();
    const months = monthNames[date.getMonth()]

    return `${hrs}:${min} ${amPm} ${day} ${months}`
   }

  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
       <textarea className='note_text' defaultValue={props.note.text}></textarea>
       <div className="note_footer">
       <p>{formatDate(props.note.time)}</p>
        <i class="fa-sharp fa-solid fa-trash" onClick={()=>props.deleteNote(props.note.id)}></i>
       </div>
    </div>
  );
}
