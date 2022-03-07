import React, { Component } from 'react';
import Spinner from "react-bootstrap/Spinner";


class SetTimer extends Component {

    render() {
        return (

            <div className="row justify-content-arount" style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "1rem", marginTop: '1rem', margin: '0' }}>
                <Spinner animation="grow" />
            </div>
        );
    }
}

export default SetTimer;