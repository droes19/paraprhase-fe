import React from 'react';
import './App.css';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paraphrase Pro</h1>
        <p>Select text to paraphrase it instantly</p>
      </header>
      <main>
        <TextEditor />
      </main>
    </div>
  );
}

export default App;
