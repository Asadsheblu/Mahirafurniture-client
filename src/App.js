import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;