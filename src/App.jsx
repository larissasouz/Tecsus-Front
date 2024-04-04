import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes/index.jsx'

function App() {
  return (
    <BrowserRouter>
        <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
