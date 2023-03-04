import { useState } from 'react';
import { OpenaiAPI } from './api/openai.api';
import './App.css';

function App() {
  const [openaiResults, setOpenaiResults] = useState("resultados aqui");
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    async function ProcessOpenaiResults() {
      const result = await OpenaiAPI.getOpenaiResults(inputText);
      setOpenaiResults(result);
    }
    ProcessOpenaiResults();
    setInputText("");
  }

  return (
    <>
      <div>
        <p>Hola, ejemplo de introduccion.</p>
        <form onSubmit={handleSubmit}>
          <input placeholder='Escribe aqui' onChange={handleChange} value={inputText}></input>
          <br/><br/>
          <button>
            Preguntar
          </button>
          <br/>
          <div>{openaiResults}</div>
        </form>
      </div>
    </>
  );
}

export default App;
