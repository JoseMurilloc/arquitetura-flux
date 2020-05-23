import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';
import { formatPrice } from '../../utils/format';

import api from '../../services/api';

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      response.data.map(product => {
        product.price = formatPrice(product.price)
      })

      setProducts(response.data);
    }

    loadProducts();
  }, [])

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title}/>
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff"/>
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default Home;
