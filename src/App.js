import React from 'react';
import './App.css';
import logo from './logo.svg';
import { NotesApp } from './components';

const title = 'Notes App';

const App = () => (
  <React.Fragment>
    <nav className="app-header layout-row align-items-center justify-content-center">
      <div className="layout-row align-items-center">
        <img alt="" src={logo} className="logo"/>
        <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
      </div>
    </nav>

    <NotesApp/>
  </React.Fragment>
);

export default App;
