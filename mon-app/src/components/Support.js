import React, { Component } from 'react';
import Spinner from "react-bootstrap/Spinner";
import Nav_Bar from './Nav';

class Support extends Component {

    render() {
        
        setTimeout(() => {
            <setTimer/>
        }, 2000);
          
        return (

            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>
                <Nav_Bar/>
                <p>SUPPORT</p>
            </div>
        );
    }
}

export default Support;

/* 
<Spinner animation="grow" />
setTimeoutSpinner(function(){
 <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>
                <Bar_menu/>
                <p>SUPPORT</p>
            </div>
}, 2000);


*/

/* 

setTimeoutSpinner(function(){
    <Spinner animation="grow" />
}, 2000);

*/