import Home from './pages/home';
import Login from './pages/login';
import Menu from './pages/menu';
import Order from './pages/order';
import Register from './pages/register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
