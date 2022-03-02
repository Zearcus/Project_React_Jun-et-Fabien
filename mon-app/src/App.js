import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Acceuil from './Acceuil';
import './App.css';
import Bar_menu from './Bar_menu';

function App(){
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Bar_menu />} />
        <Route exact path='/' element={<Acceuil />} />
      </Routes>
    </Router>
  );
}

export default App;