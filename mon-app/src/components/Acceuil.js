import React, { Component } from 'react';
import Bar_menu from './Bar_menu';
import { Parallax, Background } from 'react-parallax';
import '../App.css';

import '../style/acceuil.css';

const image1 = 
"../pictures/ok.jpg";

class Acceuil extends Component {

    render() {
        return (
            
            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>
                <Bar_menu/>
                <div class="presentation" >
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={'../pictures/ok.jpg'}
                    bgImageAlt="the dog"
                    strength={-200}
                    >
                    Blur transition from min to max
                    <div style={{ height: '200px' }} />
                </Parallax>
                
                </div>

                <div class="nft">
                    
                </div>

                <div class="who-we-are">
                
                </div>
            </div>
           
        );
    }
}

export default Acceuil;