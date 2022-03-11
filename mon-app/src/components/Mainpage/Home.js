import React, { useState, useEffect, Component } from "react";
import Main_menu from "../Nav/Main_menu";
import { Parallax } from 'react-parallax';

import './Home.css'

// import image
import homepic from "../../pictures/homepic.png";
import thief from '../../pictures/thief.gif';

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
              Meta NFT the best site to buy your NFT easily and without commitment.
              Discover many NFT in our shop which are waiting for you !
              <img src={thief} height="100" width="100" /></p>
          </div>
        </Parallax>
        <h2 style={{ paddingBottom: "20px" }}>What is an NFT?</h2>
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
          <p className="nft" style={{ textAlign: 'justify', width: '70%',paddingLeft: '50px'}}>Well, it's quite simple, but what exactly is an NFT? Another rather opaque acronym at first glance. NFT stands for Non Fungible Token.  NFTs are new and fascinating.
            They are unique digital assets, in circulation since 2014, which are transacted in cryptocurrency.
            Used to indicate ownership of a digital object (often a piece of digital art), these tokens are disrupting markets around the world, from art and video games to events and insurance.
          </p>
        </div>
        </div>
        <Parallax
          bgImage={image4}
          strength={200}
        >
          <div style={{ height: 500 }}>
            <h2 className="topStyle">Who are we?</h2>
            <p className="inlineStyle">We are the elite of NFT sales kid we are not amateurs! </p>
          </div>
        </Parallax>

      </div >


    )
  }
}



export default Home;