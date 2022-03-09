import React, { Component } from 'react';
import Main_menu from '../components/Nav/Main_menu';

class Support extends Component {

    render() {
        return (
            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem' }}>
                <Main_menu/>
                <p>SUPPORT</p>
            </div>
        );
    }
}

export default Support;