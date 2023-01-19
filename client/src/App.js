import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import MainContent from './components/Maincontent';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [loginStatus, setLoginstatus] = useState(false)
  const cbLogin = (result) => { setLoginstatus(result) }

  useEffect(() => {
    if (localStorage.getItem('accessToken')) setLoginstatus(true)
    else setLoginstatus(false)
  }, [loginStatus])

  return (
    // <div className="container-fluid bg-light">
    <div className="">
      {
        loginStatus
          ? <MainContent cbLogin={cbLogin}></MainContent>
          // : <Login cbLogin={cbLogin}></Login>
          : <Routes>
            <Route path='/' element={<Login cbLogin={cbLogin} />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
          </Routes>
      }

    </div>

  );
}

export default App;
