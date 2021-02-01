import React, { useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import Client from 'fhir-kit-client';

function App() {
  const [capabilityStatement, setCapabilityStatement] = useState("");
  const [patientPages, setPatientPages] = useState("");
  const client = new Client({baseUrl: 'https://r3.smarthealthit.org'});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <pre>
          { patientPages }
        </pre>
        <button onClick={ () => {
          client.read({
            resourceType: 'Patient',
            id: 'smart-2169591',
            }).then(data => setPatientPages(JSON.stringify(data, null, ' ')));
        }}>
          Patient FHIR Record
        </button>
      </header>
    </div>
  );
}

export default App;
