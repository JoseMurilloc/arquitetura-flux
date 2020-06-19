import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import { ProductList } from './styles';
import { formatPrice } from '../../utils/format';

import { bindActionCreators } from 'redux';
import * as ActionsCart from '../../store/modules/cart/actions';

import api from '../../services/api';

function Home({ addToCartRequest, amount }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      response.data.map(product => {
        product.priceFormat = formatPrice(product.price);
      });

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function handleAddProducts(id) {
    addToCartRequest(id);
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title}/>
          <strong>{product.title}</strong>
          <span>{product.priceFormat}</span>

          <button
            type="button"
            onClick={() => handleAddProducts(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#fff"/>
              {amount[product.id] || 0 }
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapdispatchtoprops = dispatch =>
  bindActionCreators(ActionsCart, dispatch)

export default connect(mapStateToProps, mapdispatchtoprops)(Home);
