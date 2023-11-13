import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './route/MainRoute';

function App() {
  return (
    <div className="app">
        <Router>
          <MainRoute/>
        </Router>
    </div>
  );
}

export default App;
