import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Main from "./Components/Main/index";
import Login from "./Components/Auth/Login";
import TshirtView from './Components/Pages/TshirtView';

import { useAuthContext } from './Hooks/useAuthContext';



function  App() {
  const {user} = useAuthContext();
   localStorage.getItem("token");
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/login" />  } />
        <Route path="/login" element={!user ? <Login />  : <Navigate to="/tshirts" /> } />
        <Route path="/tshirts" element={!user ?  <Navigate to="/login" /> :<TshirtView />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
