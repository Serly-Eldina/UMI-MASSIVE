import React, { useState } from 'react';
import './App.css';
import Admin from './admin'; 


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Admin /> 
    </div>
  );
}

export default App;
