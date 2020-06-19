import api from '../../../services/api';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {

  const productExists = yield select(
    state => state.cart.find(p => p.id === id)
  );

  // Nova chamada a API para conferir estoque
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if(amount > stockAmount) {
    // console.tron.warn('ERRO');
    toast.error('Quantidade solicitada fora de estoque')
    return;
  }

  if (productExists) {

    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    }

    yield put(addToCartSuccess(data));

  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);

// Basicamente um passo a mais entre a action e o reducer
// yield basicamente é o AWAIT && o * basicamente é o ASYNC
// Sagas também consegue disparar actions
// PUT basicamente dispara uma action do redux
// takeLatest Basicamente e controle de cliques do usuario pegando somente o ultimo clique como valido
// select Responsavel por buscar informações dos estados
