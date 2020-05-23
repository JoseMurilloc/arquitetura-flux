import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/>
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/>
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/>
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>


      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"/>
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
