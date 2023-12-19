import React from "react";
import "./Todo.css";

const Todo = () => {
  return (
    <>
      <h1>To-dos</h1>
      <input type="text" placeholder="Search to-dos" className="srcInput" />
      <img src="assets/searchIcon.png" alt="searchIcon" className="srcIcon" />
      <div className="todos">
        <div className="todoSec">
          <label htmlFor="note1">
            <input type="checkbox" id="note1" />
            Visit grandmother in village
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>

        <div className="todoSec">
          <label htmlFor="note2">
            <input type="checkbox" id="note2" />
            Go back home to prepare for school
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>

        <div className="todoSec">
          <label htmlFor="note3">
            <input type="checkbox" id="note3" />
            Go back to school
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>

        <div className="todoSec">
          <label htmlFor="note4">
            <input type="checkbox" id="note4" />
            Buy the items I need for the semister
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>

        <div className="todoSec">
          <label htmlFor="note5">
            <input type="checkbox" id="note5" />
            Prepare for the classes
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>

        <div className="todoSec">
          <label htmlFor="note6">
            <input type="checkbox" id="note6" />
            Attend my first class for the semister
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>

        <div className="todoSec">
          <label htmlFor="note7">
            <input type="checkbox" id="note7" />
            Visit the deans office for go ahead on project
          </label>
          <p className="date">11:00,January 4,2024</p>
          <img src="assets/delete.png" alt="delete" className="delete"/>
        </div>
      </div>
    </>
  );
};

export default Todo;
