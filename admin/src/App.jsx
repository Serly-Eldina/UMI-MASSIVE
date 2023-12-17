import React, { useState } from 'react';
import './App.css';
import Admin from './admin'; // Path relatif dari App.jsx ke Admin.jsx


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Admin /> 
      {/* Menampilkan komponen Admin untuk menampilkan data dari backend */}
    </div>
  );
}

export default App;
