import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';



function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])




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
    <>
      {loading ?
        <div className='loading d-flex w-100 vh-100 justify-content-center align-items-center'>
          <BarLoader
            size={80}
            color={"#9814eb"}
            loading={loading}
          />
        </div>
        :
        <div className={`myApp ${active}`}>

          <Dashboard />
          <Navbar />


          {/* roots */}
          <div className="main-container">


            <Home />

          </div>
          {/* roots */}
        </div>
      }
    </>
  );
}

export default App;
