import React, { Component } from 'react';
import Bar_menu from './Bar_menu';
import Image from 'react-bootstrap/Image';
import { Container, Row } from 'react-bootstrap';

// CSS import
import '../App.css';
import '../style/acceuil.css';


// picture, gif and video import
import fire from '../pictures/fire.gif';
import thief from '../pictures/thief.gif'
import nft from '../pictures/nft.mp4';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "black",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 = 
"../pictures/ok.jpg";

class Acceuil extends Component {

    render() {
        return (
            
            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>
                <Bar_menu/>
               
                <div className="presentation">
                    <h1>Meta NFT</h1>
                    <p>Meta NFT le meilleur site pour acheter vos NFT facilement et sans engagement.Découvrez de nombreux NFT dans notre boutique qui n'attendent plus que vous !!<br/>
                       <img src={thief} height= "150" width= "150"/> Grâce à notre système de paiement sécurisé vous serez à l'habrit des vilains voleurs de NFT.<img src={thief} height= "150" width= "150"/>
                    </p>
                    
                </div>
                
 
                <div className="nft">
                    <h2>Qu'est ce qu'un NFT ?</h2>
                    <p className="nft">Et bien c'est assez simple,Mais qu’est-ce qu’un NFT exactement ? Encore un accronyme assez opaque de prime abord. NFT vient de l’anglais Non Fongible Token soit jeton non fongible.  Les NFT sont nouveaux et fascinants. <br/>
                        Il s’agit de biens numériques uniques, en circulation depuis 2014, dont les transactions se font en cryptomonnaie. <br/>
                        Utilisés pour indiquer la propriété d’un objet numérique (souvent une œuvre d’art numérique), ces jetons bouleversent les marchés du monde entier, aussi bien dans l’art et les jeux vidéo que dans l’événementiel et les assurances.
                    </p>
                </div>

                <div className="who-we-are">
                
                </div>
            </div>
           
        );
    }
}

export default Acceuil;