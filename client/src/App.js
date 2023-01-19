import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';

// import MainContent from './components/Maincontent';
import LoginPage from './pages/user/loginPage';
import HomePage from './pages/user/homePage';

function App() {
  const [loginStatus, setLoginstatus] = useState(false)
  const cbLogin = (result) => { setLoginstatus(result) }

  useEffect(() => {
    if (localStorage.getItem('accessToken')) setLoginstatus(true)
    else setLoginstatus(false)
  }, [loginStatus])

  return (
    // <div className="container-fluid bg-light">
    // <MainContent></MainContent>
    <div className="container-fluid">
      {
        loginStatus
          ? <HomePage cbLogin={cbLogin}></HomePage>
          : <LoginPage cbLogin={cbLogin}></LoginPage>
      }

    </div>

  );
}

export default App;
