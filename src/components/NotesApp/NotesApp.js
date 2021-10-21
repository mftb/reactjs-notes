import React from 'react';
import { useState } from 'react';
import './NotesApp.css';

const NotesApp = () => {
  const [status, setStatus] = useState('');
  const [text, setText] = useState(''); 
  const [activeNotes, setActiveNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);
  const [otherNotes, setOtherNotes] = useState([]);
  const [tab, setTab] = useState('all');

  const updateNotes = () => {
    if ('active' === status.toLowerCase()) {
      setActiveNotes(activeNotes.concat({status: status, text: text}))
    }
    else if ('completed' === status.toLowerCase()) {
      setCompletedNotes(completedNotes.concat({status: status, text: text}))
    }
    else {
      setOtherNotes(otherNotes.concat({status: status, text: text}))
    }
  }

  return (
    <div className="layout-column align-items-center justify-content-start">
        <section className="layout-row align-items-center justify-content-center mt-30">
          <input
            data-testid="input-note-name"
            type="text"
            className="large mx-8"
            placeholder="Note Title"
            value={text} onChange={(e) => setText(e.target.value)}
          />
          <input
            data-testid="input-note-status"
            type="text"
            className="large mx-8"
            placeholder="Note Status"
            value={status} onChange={(e) => setStatus(e.target.value)}
          />
          <button className="" data-testid="submit-button" onClick={updateNotes}>Add Note</button>
        </section>

        <div className="mt-50">
          <ul className="tabs">
            <li
              className="tab-item slide-up-fade-in"
              data-testid="allButton"
              onClick={() => setTab('all')}
            >
              All
            </li>
            <li
              className="tab-item slide-up-fade-in"
              data-testid="activeButton"
              onClick={() => setTab('active')}
            >
              Active
            </li>
            <li
              className="tab-item slide-up-fade-in"
              data-testid="completedButton"
              onClick={() => setTab('completed')}
            >
              Completed
            </li>
          </ul>
        </div>
        <div className="card w-40 pt-30 pb-8">
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody data-testid="noteList">
            {(tab === 'all' || tab === 'active') && activeNotes.map((item) => (
              <tr key={item.text + item.status}>
                <td>{item.text}</td>
                <td>{item.status}</td>
              </tr>
            ))}
            {(tab === 'all' || tab === 'completed') && completedNotes.map((item) => (
              <tr key={item.text + item.status}>
                <td>{item.text}</td>
                <td>{item.status}</td>
              </tr>
            ))}
            {(tab === 'all') && otherNotes.map((item) => (
              <tr key={item.text + item.status}>
                <td>{item.text}</td>
                <td>{item.status}</td>
              </tr>
            ))}
            </tbody> 
            
          </table>
        </div>
      </div>
  )};
      

export default NotesApp;
