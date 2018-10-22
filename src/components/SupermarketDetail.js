import React from 'react';
import Image from '../images/extra-frente.jpg';
import '../css/supermarketdetail.css';

const SupermarketDetail = () =>
        <div className="containerDetail">
            <img src={Image} alt="Detalhe" className="detail"></img>
            <h2 className="name-supermarket-detail color-detail">EXTRA</h2>
            <h3 className="street-detail color-detail magin-weight-detail">R. Maria Cinto de Biagi, 164</h3>
            <h3 className="neighborhood-detail magin-weight-detail">Jardim Santa Rosália</h3>
            <h3 className="city-detail color-detail magin-weight-detail">Sorocaba - SP, 18090-000</h3>
        </div>

export default SupermarketDetail;