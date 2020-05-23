import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, Total, ProductsTable } from './styles';

function Cart() {
  return (
    <Container>
      <ProductsTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tenis"/>
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" value={2} readOnly/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>

          </tr>
        </tbody>
      </ProductsTable>

      <footer>
        <button type="button">
          Finalizar pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,23</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
