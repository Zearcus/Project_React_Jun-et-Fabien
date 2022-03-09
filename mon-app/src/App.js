import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Mainpage/Home';
import Store from './components/Shop/Store';
import Support from './components/Support';
import Cart from './components/Shop/Cart';






function App(){
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Store' element={<Store/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/Support' element={<Support/>}/>
      </Routes>
    </Router>
  )
}




export default App;
