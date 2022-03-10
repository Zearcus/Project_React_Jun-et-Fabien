import React, { useState, useEffect, Component } from "react";
import Main_menu from "../Nav/Main_menu";
import { Parallax } from 'react-parallax';

import './Home.css'

// import image
import homepic from "../../pictures/homepic.png";
import thief from '../../pictures/thief.gif';
import { Container } from "react-bootstrap";

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Main_menu />
        <Parallax bgImage={homepic} strength={500}>
          <div style={{ height: 666 }}>
            <h1 className="topStyle">M'aime NFT</h1>
            <p className="presentation">
              <img src={thief} height="100" width="100" />
              Meta NFT le meilleur site pour acheter vos NFT facilement et sans engagement.
              Découvrez de nombreux NFT dans notre boutique qui n'attendent plus que vous !!
              <img src={thief} height="100" width="100" /></p>
          </div>
        </Parallax>
        <h2 style={{ paddingBottom: "20px" }}>Qu'est ce qu'un NFT ?</h2>
        <div className="videopre">
        <div className="NFT" style={{ }}>
          <iframe src="https://www.youtube.com/embed/Oz9zw7-_vhM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
            style={{ marginBottom: '30px', paddingLeft: '400px', height:'300px'}}
          >
          </iframe>
        </div>
        <div>
          <p className="nft" style={{ textAlign: 'justify', width: '70%',paddingLeft: '50px'}}>Et bien c'est assez simple,Mais qu’est-ce qu’un NFT exactement ? Encore un accronyme assez opaque de prime abord. NFT vient de l’anglais Non Fongible Token soit jeton non fongible.  Les NFT sont nouveaux et fascinants.
            Il s’agit de biens numériques uniques, en circulation depuis 2014, dont les transactions se font en cryptomonnaie.
            Utilisés pour indiquer la propriété d’un objet numérique (souvent une œuvre d’art numérique), ces jetons bouleversent les marchés du monde entier, aussi bien dans l’art et les jeux vidéo que dans l’événementiel et les assurances.
          </p>
        </div>
        </div>
        <Parallax
          bgImage={image4}
          strength={200}
        >
          <div style={{ height: 500 }}>
            <h2 className="topStyle">Qui sommes-nous ?</h2>
            <p className="inlineStyle">Nous sommes l'élites de la vente de NFT gamin nous ne sommes pas des amateurs ! </p>
          </div>
        </Parallax>

      </div >


    )
  }
}



export default Home;