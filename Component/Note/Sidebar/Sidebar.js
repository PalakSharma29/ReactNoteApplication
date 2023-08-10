import React, { useState } from 'react'

// import plus from '../../Images/plus.png';

import './Sidebar.css'

export default function Sidebar(props) {

  const colors = ["seagreen", "yellow", "orange", "peru", "slateblue"];

  const[listOpen, setListOpen] = useState(false);
  return (
    <div className= "sidebar">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVci7pq9I_TBvXc4pGqkXmpmq-pj3iRMayX_qZHznLg&s" alt="Add" onClick={()=>setListOpen(!listOpen)} />
   
   <ul className= {`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
    {colors.map((item,index) =>(
      <li key = {index}
      className='sidebar_list_item'
      style={{backgroundColor:item}}
      onClick={()=>props.addNote(item)}>
      </li>
    ))}
   </ul>
    </div>
  )
}
