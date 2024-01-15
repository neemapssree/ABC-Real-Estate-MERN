import './App.css';
import AddProperty from './Pages/AddProperty';
import PropUserView from './Pages/PropUserView';
import Home from './Pages/Home';
import Login from './Pages/Login';
import './main.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from './Pages/Success';
import Mybookings from './Pages/Mybookings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/add-property' element={<AddProperty />}></Route>
          <Route path='/view-prop/:id' element={<PropUserView />}></Route>
          <Route path='/my-bookings' element={<Mybookings />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
