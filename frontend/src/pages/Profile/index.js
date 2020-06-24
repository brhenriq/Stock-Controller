import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiSearch, FiEdit2, FiClipboard } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Profile() {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const userName = localStorage.getItem('userName');

  const history = useHistory();

  useEffect(() => {
    api.get('product').then(response => {
      setProducts(response.data);
    })
  }, [userName]);

  async function handleDeleteProduto(id) {
    try {
      await api.delete(`product/${id}`);

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      alert('Erro ao deletar produto, tente novamente.');
    }
  }

  async function handleBuscarProduto() {
    try {
      await api.get(`profile/${name}`).then(response => {
        setProducts(response.data);
      })

    } catch (err) {
      alert('Erro ao buscar produto, tente novamente.');
    }
  }

  function handlelogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <span>Bem vindo, {userName}</span>

        <Link className="button" to="/product/new">Cadastrar novo produto</Link>

        <button type="button">
          <Link to="/report">
            <FiClipboard size={18} color="#4B50FF" />
          </Link>
        </button>

        <button type="button" onClick={handlelogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <header>
        <h1>Produtos Cadastrados</h1>
        <input
          placeholder="Nome do produto"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button type="button" id="pesquisa" onClick={() => handleBuscarProduto()}>
          <FiSearch size={20} color="#a8a8b3" />
        </button>
      </header>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>PRODUTO</strong>
            <p>{product.name}</p>

            <strong>TIPO</strong>
            <p>{product.tipo}</p>

            <strong>QUANTIDADE:</strong>
            <p>{product.qtd}</p>

            <button type="button" onClick={() => handleDeleteProduto(product.id)}>
              <FiTrash2 size={20} color="#e02041" />
            </button>

            <button type="button" onClick={() => localStorage.setItem('productId', product.id)}>
              <Link to="/product/edit">
                <FiEdit2 size={20} color="#a8a8b3" />
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}