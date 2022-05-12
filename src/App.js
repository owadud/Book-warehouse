import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddSupplier from './Pages/AddSupplier/AddSuppiler';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="container-fluid">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/blog" element={<Blog></Blog>}></Route>
       <Route path="/addSupplier" element={<AddSupplier></AddSupplier>}></Route>
       <Route path="/books/update/:productId" element={<UpdateProduct></UpdateProduct>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes> 
     <Footer></Footer>
    </div>
  );
}

export default App;
