import React, { Component } from 'react';
import Bar_menu from './Bar_menu';

class Support extends Component {

    render() {
        return (
            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>
                <Bar_menu/>
                <p>SUPPORT</p>
            </div>
        );
    }
}

export default Support;