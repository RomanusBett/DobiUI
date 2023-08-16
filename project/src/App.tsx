import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from './pages/homePg/homePage';
import AdminComponent from './pages/adminPgs/adminPg';
import UserComponent from './pages/userPgs/usrPg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePageComponent />}/>
            <Route path='/admin' element={<AdminComponent />}/>
            <Route path='/home' element={<UserComponent />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
