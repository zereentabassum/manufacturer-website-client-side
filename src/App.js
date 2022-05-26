import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';

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
    <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>

    <Route path='parts/:_id' element={<RequireAuth>
      <Purchase></Purchase>
    </RequireAuth>}></Route>




    <Route path='dashboard' element={<RequireAuth>
      <Dashboard></Dashboard>
    </RequireAuth>}>
    <Route index element={<MyProfile></MyProfile>}></Route>
    <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
    <Route path='addreview' element={<AddReview></AddReview>}></Route>
    <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
    <Route path='manageorders' element={<ManageAllOrders></ManageAllOrders>}></Route>



   
    </Route>



    <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
