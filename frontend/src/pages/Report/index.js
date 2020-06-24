import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Profile() {
  const [products, setProducts] = useState([]);

  const userName = localStorage.getItem('userName');


  useEffect(() => {
    api.get('profile').then(response => {
      setProducts(response.data);
    })
  }, [userName]);

  
  function handleImprimir() {
    window.print();
  }

  return (
    <div className="report-container">
      <header>
      <h1>Produtos em falta</h1>
        <Link className="button" onClick={() => handleImprimir()}>Imprimir</Link>

        <button type="button">
        <Link to="/profile">
          <FiArrowLeft size={18} color="#e02041" />
          </Link>
        </button>        
      </header>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>PRODUTO: {product.name}</strong>

            <strong>QUANTIDADE: {product.qtd}</strong>

            <strong>TIPO: {product.tipo}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}