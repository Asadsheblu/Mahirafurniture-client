
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Additem from './Components/AddInventory/Additem';
import Header from "./Components/Shared/Header/Header"
import SignIn from './Components/SignUp/SignIn/SignIn';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Details from './Components/Inventory/Details/Details';
import Manageitems from './Components/Inventory/Manageinventoy/Manageitems';
import Footer from './Components/Shared/Header/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import Myitem from './Components/Inventory/Myitem';
import Career from './Components/Career/Career';

function App() {
  return (
    <div>
     <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path='/inventory/:Inventoryid' element={<RequireAuth>
          <Details />
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth><Manageitems /></RequireAuth>
          }></Route>
          
          <Route path='/myitem' element={<Myitem />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/additem' element={   <Additem />  }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
