//import Button from 'react-bootstrap/Button';
import './App.css';

//import { Col, Row, Button } from 'react-bootstrap';
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductInfoPage from './pages/ProductInfoPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPage from './pages/UserPage';
import OrdersPage from './pages/OrdersPage';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/login' exact element={<LoginPage/>}/>
          <Route path='/register' exact element={<RegisterPage/>}/>
          <Route path='/productinfo/:productId' exact element={<ProductInfoPage/>}/>
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
          <Route path='/user' exact element={<ProtectedRoutes><UserPage/></ProtectedRoutes>}/>
          <Route path='/orders' exact element={<ProtectedRoutes><OrdersPage/></ProtectedRoutes>}/>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <h1>ecommerce shop</h1>
        <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
        </Row>
      </header> */}
    </div>
  );
}
export default App;

export const ProtectedRoutes = ({children}) => {
  const user = localStorage.getItem('currentUser')
  console.log("user " ,user)
  console.log("user navigate to " ,children)
  if(user){
    return children
  } else {
    return <Navigate to="/login"/>
  }
}
