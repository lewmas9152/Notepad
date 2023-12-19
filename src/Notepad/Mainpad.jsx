import React,{useState} from 'react'
import NotesSec from './NotesSec'
import Todo from './Todo'

const Mainpad = () => {
  const[currentPage,setCurrentPage] = useState("todo");

  const togglePage =(page) => {
    setCurrentPage(page);
  }
  return (
    <div className='notesContainer'>
      { currentPage ===  "notes" && <NotesSec/>}
      { currentPage === "todo" && <Todo/>}
      <div className="add" >
        <img src="assets/addIcon.png" alt="addIcon"  className="addIcon icon"/>
      </div>

      <div className="icons">
        <img src="assets/notesIcon.png" alt="notesIcon" className="icon" onClick={() =>{togglePage("notes")}}/>
        <img src="assets/todoIcon.png" alt="todoIcon" className="icon" onClick={() =>{togglePage("todo")}}/>
      </div>
    </div>
  )
}

export default Mainpad
