import React from 'react';
import { Spinner } from 'reactstrap';
import Index from '../Components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
  export default HomePage