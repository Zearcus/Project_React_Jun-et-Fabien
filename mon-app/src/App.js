import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Accueil from './components/Accueil';
import Store from './components/Store';
import Support from './components/Support';


function App(){
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/store' element={<Store />} />
        <Route exact path='/support' element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;