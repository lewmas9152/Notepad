import React from 'react'
import './Notes.css'
import NotesSec from './NotesSec'
import Todo from './Todo'


const Mainpad = () => {
  return (
    <div className='notesContainer'>
      {/* <NotesSec/> */}
      <Todo/>
    </div>
  )
}

export default Mainpad
