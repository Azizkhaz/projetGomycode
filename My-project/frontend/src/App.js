import './App.css';
import Register from './composant/Register/Register';
import Login from './composant/Login/Login';
import { Routes, Route } from 'react-router';
import PrivateRoute from './composant/User/privateRoute/PrivateRoute';
import HomePage from './composant/HomePage.js/HomePage';
import Homme from './composant/User/Homme/Homme'
import Contact from './composant/User/contact/Contact';
import User from './composant/User/User';
import Reservation from './composant/User/Reservation/Reservation';
import AddFood from './composant/Admin/Menu/AddFood/AddFood'
import MenuList from './composant/Admin/Menu/menu/MenuList';
import UpdateFood from './composant/Admin/Menu/updatefood/UpdateFood';
import MenuCList from './composant/User/MenuC/MenuCList';
import Admin from './composant/Admin/Admin';
import Contactt from './composant/Admin/Contact/Contactt';
import ReservationAdmin from './composant/Admin/ReservationAdmin/ReservationAdmin';
import ReservationList from './composant/Admin/ReservationAdmin/ReservationList';
function App() {
  return (
    <>
       

    <Routes>
    <Route path='/MenuList' element={<MenuList/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/app/privateRoute' element={<PrivateRoute/>}/>
    <Route path='/homme' element={<Homme/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/reservation/:userId' element={<Reservation/>}/>
    <Route path='/addfood' element={<AddFood/>}/>
    <Route path='/updatefood/:id' element={<UpdateFood/>}/>
    <Route path='/menuclist' element={<MenuCList/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/contactt' element={<Contactt/>}/>
    <Route path='/reservationadmin' element={<ReservationAdmin/>}/>
    <Route path='/reservationLlist' elemen={<ReservationList/>}/>
    </Routes>
    </>
  );
}

export default App;
