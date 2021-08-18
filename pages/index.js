import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
//import Index from '../Components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { response } from 'express';

/*var points = [
  {lat: response.data.lat, lng: response.data.lng}
]
var bounds = new this.props.google.maps.LatLngBounds();
for (var i = 0; i < points.length; i++) {
bounds.extend(points[i]);
}*/

const Index = (data) => ( // parenteses pois é uma array function, depois não preciso usar o return
        <div>
            Página Inicial
            <div class="d-flex justify-content-center">
                    <Spinner color="dark" />
            </div>

            <Map google={this.props.google}
            style={style}
            center={{
            lat: 40.854885,
            lng: -88.081807
            }}
            zoom={15}
            onClick={this.onMapClicked}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>

        </div>
)
  
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCRWnOe2NKnJkuCULu2OJfcYhLIAnLHuY4")
})(Index)

Index.getInitialPropos = async () => {
    var response = await axios.get("http://localhost:8080/index");
    console.log(response);
    return {response: response.data}
}