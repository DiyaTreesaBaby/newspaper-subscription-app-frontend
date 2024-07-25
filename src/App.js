import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import AddSearch from './components/AddSearch';
import AddView from './components/AddView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDelete from './components/AddDelete';
import AddNavBar from './components/AddNavBar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
     <Route path='/View' element={<AddView/>} />
     <Route path='/Search' element={<AddSearch/>} />
     <Route path='/Delete' element={<AddDelete/>} />
     <Route path='/Add' element={<AddSubscribers/>} />
 
 
    </Routes>
    
    
    
    </BrowserRouter>
  );
}

export default App;
