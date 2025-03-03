import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPageComponent.jsx';
import MainComponent from './components/MainComponent.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container h-[100vh] overscroll-none">
        <Routes>
          <Route element={<LandingPage />} path='/' />
          <Route element={<MainComponent />} path='/main' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
