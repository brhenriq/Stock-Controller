import React, {useState}  from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewProduct() {
    const [name, setName] = useState('');
    const [qtd, setQtd] = useState('');
    const [qtd_limite, setQtd_limite] = useState('');
    const [tipo, setTipo] = useState('Tipo 1');

    const history = useHistory();

    async function handleNewProduct(e){
        e.preventDefault();

        const data = {
            name,
            qtd,
            qtd_limite,
            tipo
        };

        try{
            await api.post('product', data);

            alert(`O produto foi cadastrado com sucesso`);

            history.push('/profile');
        } catch (err){
            alert('Erro no cadastro do produto');
        }
        
    }

    return (
        <div className="new-product-container">
        <div className="content">
        <section>
              <h1>Cadastrar novo Produto</h1>
              <Link to="/profile">
                  <FiArrowLeft size={16} color="#E02041"/>
              </Link>
          </section>

          <form onSubmit={handleNewProduct}>
              <input 
              placeholder="Nome do Produto"
              value={name}
              onChange={e=> setName(e.target.value)}
              required
              />

              <select id="tipo" value={tipo} onChange={e=> setTipo(e.target.value)}>
                <option value="Tipo 1">Tipo 1</option>
                <option value="Tipo 2">Tipo 2</option>
              </select>

              <input 
              type="number" 
              placeholder="Quantidade em estoque"
              value={qtd}
              onChange={e=> setQtd(e.target.value)}
              required
              />

              <input 
              type="number" 
              placeholder="Quantidade limite" 
              value={qtd_limite}
              onChange={e=> setQtd_limite(e.target.value)}
              required
              />

              <button className="button">Cadastrar</button>
          </form>
        </div>
    </div>
    );
  }
  
