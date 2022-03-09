import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import Home from './components/Mainpage/Home';
import Store from './components/Shop/Store';
import Support from './components/Support';
import Cart from './components/Shop/Cart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nft: [] 
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/nfts?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const nft = await response.json()
    this.setState({ nft: nft })
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Store' element={<Store nft={this.state.nft} />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/Support' element={<Support />} />
        </Routes>
      </Router>
    )
  }

}


export default App;
