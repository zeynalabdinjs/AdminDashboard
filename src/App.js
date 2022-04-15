import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sales from './pages/Sales';
import SearchModal from './Modal/SearchModal';



function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
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
      <BrowserRouter>

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
            <SearchModal />


            {/* roots */}
            <div className="main-container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sales' element={<Sales />} />
              </Routes>




            </div>
            {/* roots */}
          </div>
        }
      </BrowserRouter>

    </>
  );
}

export default App;
