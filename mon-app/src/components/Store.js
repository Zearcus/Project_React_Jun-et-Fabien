import React, { Component } from 'react';
import Bar_menu from './Bar_menu';

class Store extends Component {

    render() {
        return (
            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem' }}>
                <Bar_menu/>
                <p>Store</p>
            </div>
        );
    }
}

export default Store;