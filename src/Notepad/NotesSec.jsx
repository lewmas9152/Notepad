import React from "react";
import Navigation from "./Navigation";

const NotesSec = () => {
  return (
    <>
      <h1>Notes</h1>
      <input type="text" placeholder="Search notes" className="srcInput" />
      <img src="assets/searchIcon.png" alt="searchIcon" className="srcIcon" />
      <div className="notesCard">
        <div className="noteSec">
          <h2>Krr</h2>
          <p className="intro">Phases of expert system</p>
          <p className="time">Justnow</p>
        </div>

        <div className="noteSec">
          <h2>Vector analysis</h2>
          <p className="intro">Divergence</p>
          <p className="time">19:47,November 30,2023</p>
        </div>

        <div className="noteSec">
          <h2>Flexpay</h2>
          <p className="intro">AWS</p>
          <p className="time">12:58,November 29,2023</p>
        </div>

        <div className="noteSec">
          <h2>JFrame</h2>
          <p className="intro">Import javax.swing.*;</p>
          <p className="time">07:01,November 12,2023</p>
        </div>

        <div className="noteSec">
          <h2>Web hosting</h2>
          <p className="intro">Netlify</p>
          <p className="time">16:12,November 3,2023</p>
        </div>

        <div className="noteSec">
          <h2>Web hosting</h2>
          <p className="intro">Netlify</p>
          <p className="time">16:12,November 3,2023</p>
        </div>
      </div>

      <Navigation />
    </>
  );
};

export default NotesSec;
