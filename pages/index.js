import React from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Index from '../Components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

const Index = (data) => ( // parenteses pois é uma array function, depois não preciso usar o return
        <div>
            <Index />
            Página Inicial
            <div class="d-flex justify-content-center">
                    <Spinner color="dark" />
            </div>
        </div>
)
  
export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={7}
          initialCenter={{ lat: -15.838317, lng: -47.955428 }}
            // poderia usar {data.response.localizacao} para puxar do BD
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

Index.getInitialPropos = async () => {
    var response = await axios.get("http://localhost:8080/index");
    console.log(response);
    return {response: response.data}
}
export default Index