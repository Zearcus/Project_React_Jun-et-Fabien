import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from "react-bootstrap/Spinner";
import Nav_Bar from './Nav';

// CSS import
import '../App.css';
import '../style/Accueil.css';


// picture, gif and video import
import thief from '../pictures/thief.gif'

export const getUsers = async () => {
    const response = await fetch('http://localhost:3000/users', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const users = await response.json()
    return users
}


class Acceuil extends Component {

  render() {
    return (
        
      <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>

        <Nav_Bar/>
        
        <div className="presentation">
            <h1>Meta NFT</h1>
            <p>Meta NFT le meilleur site pour acheter vos NFT facilement et sans engagement.Découvrez de nombreux NFT dans notre boutique qui n'attendent plus que vous !!<br/>
            Notre bute est de vous faire gagner de l'argent en possédent un bien unique en son genre et qui vous conviendra la mieux si vous avez l'argent bien sûre . <br/>
            nous voulons révolutionner le monde des NFT car nous voulons le meilleur pour nos clients. <br/>
                <img src={thief} height= "150" width= "150"/> Grâce à notre système de paiement sécurisé vous serez à l'habrit des vilains voleurs de NFT.<img src={thief} height= "150" width= "150"/>
            </p>
            
        </div>
        
        <h2>Qu'est ce qu'un NFT ?</h2>
        <div className="nft">
            <iframe src="https://www.youtube.com/embed/Oz9zw7-_vhM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="nft">Et bien c'est assez simple,Mais qu’est-ce qu’un NFT exactement ? Encore un accronyme assez opaque de prime abord. NFT vient de l’anglais Non Fongible Token soit jeton non fongible.<br/> Les NFT sont nouveaux et fascinants. <br/>
                Il s’agit de biens numériques uniques, en circulation depuis 2014, dont les transactions se font en cryptomonnaie. <br/>
                Utilisés pour indiquer la propriété d’un objet numérique (souvent une œuvre d’art numérique), ces jetons bouleversent les marchés du monde entier, aussi bien dans l’art et les jeux vidéo que dans l’événementiel et les assurances.
            </p>
        </div>

        <div className="Support">
            <h2 className="Support">Qui sommes-nous ? </h2>   
            <p className="Support">Quibus ita sceleste patratis Paulus cruore perfusus reversusque ad principis castra multos coopertos paene catenis adduxit in squalorem deiectos atque maestitiam, 
                quorum adventu intendebantur eculei uncosque parabat carnifex et tormenta. et ex is proscripti sunt plures actique in exilium alii, 
                non nullos gladii consumpsere poenales. nec enim quisquam facile meminit sub Constantio, ubi susurro tenus haec movebantur, quemquam absolutum. <br/>
                Erat autem diritatis eius hoc quoque indicium nec obscurum nec latens, 
                quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur. <br/>
            </p>
            <Button variant="success" className="Support">Nous contacter !</Button>
        </div>
    </div>
        
    );
  }
}

export default Acceuil;

//On doit dans un premier temps créer et exporter une fonction utilisant fetch , le mieux est de la créer dans un dossier /api/users.js :

/* 
export const getUsers = async () => {
    const response = await fetch('http://localhost:3001/users', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const users = await response.json()
    return users
}

Il est nécessaire d'ajouter l'objet voulu au state en amont :

constructor(props){
    super(props)
    this.state={
       users:[]
    }
  }

Ensuite, on va utiliser la méthode componentDidMount() du composant dans lequel on souhaite récupérer les données :

 async componentDidMount (){
    const users = await fromUsersAPI.getUsers()
    this.setState({
      users: users
    })
  }

Il ne nous reste plus qu'a utilisé les données contenues dans notre state à notre guise : 

  render() {
    return (
      <div className="App">
          <input type="text" name="nom" value={this.state.nom} onChange={(e) => this.handleChange(e)}/>
          <input type="text" name="age" value={this.state.age} onChange={(e) => this.handleChange(e)}/>
          <ul>
            {
              this.state.users.map((u,i) =>{return <li key={i}>{u.name}</li>})
            }
           </ul>
          <Link to={{pathname: '/', data:this.state}} >Home</Link>
      </div>
    )
  }




*/