import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from './pages/homePg/homePage';
import AdminComponent from './pages/adminPgs/adminPg';
import UserComponent from './components/usrPgComponents/userPgs/usrPg';
import CartProvider from './components/store/cartProvider';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePageComponent />} />
            <Route path='/admin' element={<AdminComponent />} />
            <Route path='/user/:meal' element={<UserComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
