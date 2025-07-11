// src/App.jsx
import React from 'react';
import WebinarPage from './components/WebinarPage'; // <--- Add this import
// import Inspiration from './Inspiration'

function App() {
  return (
    <div className="App">
      <WebinarPage />
      {/* <Inspiration /> */}
    </div>
  );
}

export default App;