import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import ForgotPasssword from './pages/auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import AdminDashboard from './pages/admin/AdminDashboard';
import Users from './pages/admin/Users';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<HomePage/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/forgot-password' element = {<ForgotPasssword/>}/>
      <Route path='/dashboard' element = {<PrivateRoute/>}>
        <Route path='user' element = {<Dashboard/>}/>
      </Route>
      <Route path='/dashboard' element = {<AdminRoute/>}>
        <Route path='admin' element = {<AdminDashboard/>}/>
        <Route path='admin/create-category' element = {<CreateCategory/>}/>
        <Route path='admin/create-product' element = {<CreateProduct/>}/>
        <Route path='admin/users' element = {<Users/>}/>
      </Route>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/policy' element = {<Policy/>}/>
      <Route path='*' element = {<PageNotFound/>}/>

    </Routes>
    </>
  );
}

export default App;
