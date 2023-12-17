import React from 'react'
import Header from './Header'
import './Notes.css'
import NotesSec from './NotesSec'


const Mainpad = () => {
  return (
    <div className='notesContainer'>
      <Header/>
      <NotesSec/>
    </div>
  )
}

export default Mainpad
