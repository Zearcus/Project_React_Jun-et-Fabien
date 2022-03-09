import React, { useState, useEffect,Component } from "react";
import Main_menu from "../Nav/Main_menu";
import { Parallax } from 'react-parallax';

// import image
import homepic from "../../pictures/homepic.png";
import thief from '../../pictures/thief.gif';

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px',
}

const topStyle = {
  background: '#fff',
  left: '50%',
  top: '10%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  padding: '20px',
  borderRadius: '10px'
}


class Home extends Component {
  render() {
    return(
      <div style={{ textAlign: 'center' }}>
        <Main_menu />
      <Parallax bgImage={ homepic } strength={500}>
        <div style={{ height: 500 }}>
          <div style={topStyle}>Meta NFT</div>
          <div style={inlineStyle}> <img src={thief} height= "100" width= "100"/> Meta NFT le meilleur site pour acheter vos NFT facilement et sans engagement.
          Découvrez de nombreux NFT dans notre boutique qui n'attendent plus que vous !!<img src={thief} height= "100" width= "100"/></div>
        </div>
      </Parallax>
      <h1>Qu'est ce qu'un NFT ?</h1>
      <p className="nft">Et bien c'est assez simple,Mais qu’est-ce qu’un NFT exactement ? Encore un accronyme assez opaque de prime abord. NFT vient de l’anglais Non Fongible Token soit jeton non fongible.  Les NFT sont nouveaux et fascinants. <br/>
        Il s’agit de biens numériques uniques, en circulation depuis 2014, dont les transactions se font en cryptomonnaie. <br/>
        Utilisés pour indiquer la propriété d’un objet numérique (souvent une œuvre d’art numérique), ces jetons bouleversent les marchés du monde entier, aussi bien dans l’art et les jeux vidéo que dans l’événementiel et les assurances.
      </p>
      <Parallax 
        bgImage={ image4 }
        strength={200}
      >
        <div style={{ height: 500 }}>
          <div style={topStyle}>Qui sommes-nous ?</div>
          <div style={inlineStyle}>mouhahahahah Nous sommes l'élites de la vente de NFT gamin nous ne sommes pas des amateurs ! MUDADA</div>
        </div>
      </Parallax>
      <div style={{ height: 50 }}>

      </div>

    </div>
      
      
    )
  }
  }



export default Home;