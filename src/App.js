import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddSupplier from './Pages/AddSupplier/AddSuppiler';
import AllPublisher from './Pages/AllPublisher/AllPublisher';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import SignUp from './Pages/SignUp/SignUp';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="container-fluid">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/blog" element={<Blog></Blog>}></Route>
       <Route path="/publisher" element={<AllPublisher></AllPublisher>}></Route>
       <Route path="/addSupplier" element={<AddSupplier></AddSupplier>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<SignUp></SignUp>}></Route>
       <Route path="/books/update/:productId" element={
         <RequireAuth>
            <UpdateProduct></UpdateProduct>
            </RequireAuth>
      
       }></Route>

       

       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes> 
     <Footer></Footer>
    </div>
  );
}

export default App;
