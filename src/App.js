import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import MyProfile from './Pages/MyProfile/MyProfile';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';

function App() {

  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='home' element={<Home></Home>}></Route>
    <Route path='blogs' element={<Blogs></Blogs>}></Route>
    <Route path='login' element={<Login></Login>}></Route>
    <Route path='signup' element={<Signup></Signup>}></Route>
    <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
    <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
    <Route path='purchase' element={<RequireAuth>
      <Purchase></Purchase>
    </RequireAuth>}></Route>

    <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
