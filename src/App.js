import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';




function App() {
  const modeState = useSelector(state => state.mode.value)

  const active = modeState ? 'active' : '';
  useEffect(() => {
    if (modeState) {
      document.body.classList.add('active');
    }

    else {
      document.body.classList.remove('active');
    }
  });
  return (
    <div className={`App ${active}`}>
      <Dashboard />
      <Navbar />


      {/* roots */}
      <div className="main-container">


        <Home />

      </div>
      {/* roots */}
    </div>
  );
}

export default App;
