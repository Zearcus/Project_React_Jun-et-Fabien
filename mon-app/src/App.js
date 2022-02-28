import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Acceuil from './Acceuil';
import Page1 from './Page1';
import './App.css';

function App(){
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Acceuil />} />
        <Route exact path='/Page1' element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;