import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes/index.jsx'
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/sidebar/sidebar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="content">
          <RoutesApp />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

