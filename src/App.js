
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './components/Account';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/account' element={<Account/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
