import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewProduct() {
  const [qtd, setQtd] = useState('');

  const history = useHistory();

  const productId = localStorage.getItem('productId');

  async function handleAddProduct(e) {
    try {
      e.preventDefault();
      await api.put(`product/${productId}/${qtd}/0`);
      alert('Alteração concluida com sucesso.');

      localStorage.setItem('productId', "")
      history.push('/profile');
    } catch (err) {
      alert('Erro ao alterar quntidade do produto, tente novamente.');
    }
  }

  async function handleRemoveProduct(e) {
    try {
      e.preventDefault();
      await api.put(`product/${productId}/${qtd}/1`);
      alert('Alteração concluida com sucesso.');

      localStorage.setItem('productId', "")
      history.push('/profile');
    } catch (err) {
      alert('Erro ao alterar quntidade do produto, tente novamente.');
    }
  }

  return (
    <div className="edit-product">
      <div className="content">
        <section>
          <h1>Adicionar ou remover do estoque</h1>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
          </Link>
        </section>

        <form>
          <input type="number" placeholder="Valor"
            value={qtd}
            onChange={e => setQtd(e.target.value)}
            required />
          <button type="submit" className="button" onClick={handleAddProduct}>Adicionar</button>
          <button type="submit" className="button" onClick={handleRemoveProduct}>Remover</button>
        </form>
      </div>
    </div>
  );
}

