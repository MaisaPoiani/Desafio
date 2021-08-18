import React from 'react';
import { Spinner } from 'reactstrap';
import Index from '../Components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

function HomePage() {
    return (
        <div>
            <Index />
            Página Inicial
            <div class="d-flex justify-content-center">
                    <Spinner color="dark" />
            </div>
        </div>
        );
}
  
export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={7}
          initialCenter={{ lat: -15.838317, lng: -47.955428 }}
        >
        </Map>
      );
    }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: '',
    }
  ))(MapContainer)
export default HomePage