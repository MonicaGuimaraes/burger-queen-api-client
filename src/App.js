import Home from './pages/home';
import Login from './pages/login';
import Menu from './pages/menu';
import Order from './pages/order';
import Register from './pages/register';
import { PrivateRoute } from './components/localStorage';
import OrderFinalized from './pages/orderFinalized';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<PrivateRoute> <Menu /> </PrivateRoute>} />
        <Route path='/order' element={<PrivateRoute> <Order /> </PrivateRoute>} />
        <Route path='/finalized' element={<PrivateRoute> <OrderFinalized /> </PrivateRoute>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
