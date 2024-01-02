import './App.css';
import Header from './Header';
import AddUser from './AddUser';
import ProductList from './ProductList';
import { Routes, Route } from 'react-router-dom'
import EditUser from './EditUser'
function App() {
  return (
    <div>
        <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/userdata/add' element={<AddUser />} />
        <Route path='/userdata/:productid' element={<EditUser />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <ProductList />
      </div>
  )
}



export default App;
