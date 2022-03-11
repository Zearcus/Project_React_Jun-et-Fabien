import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component,useState,useEffect} from 'react';
import Home from './components/Mainpage/Home';
import Store from './components/Shop/Store';
import Support from './components/Support';
import Cart from './components/Shop/Cart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nft: [],
      cart: [],
      search:'',
    }
  }

  addToCart = (article)=>{
    if(this.state.cart){
      this.setState({cart:[...this.state.cart, article]},
        ()=> localStorage.setItem('cart', JSON.stringify(this.state.cart))
    )
    }else{
      this.setState({cart:[article]},()=> localStorage.setItem('cart', JSON.stringify(this.state.cart)))
    }
  }
  
  removeArticle = (articleToRemove) => {
    let index = this.state.cart.findIndex(item => item.id === articleToRemove.id)
    const tempCart = [...this.state.cart]
    if (index >= 0) {
      tempCart.splice(index, 1)
      this.setState({
        cart: [...tempCart]
      }, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)))
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    this.setState({
        [name]: e.target.value
    })
}
  
  componentDidMount = async () => {
    const response = await fetch('http://localhost:1337/api/nfts?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const nft = await response.json()
    this.setState({ nft: nft })
    this.setState({cart:JSON.parse(localStorage.getItem('cart'))})
  }


  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Store' element={<Store nft={this.state.nft} cart={this.state.cart} addToCart={this.addToCart} handleChange={this.handleChange} />} />
          <Route exact path='/Cart' element={<Cart cart={this.state.cart} removeArticle={this.removeArticle} />} />
          <Route exact path='/Support' element={<Support />} />
        </Routes>
      </Router>
    )
  }

}



export default App;
