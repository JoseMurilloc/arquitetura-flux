import api from '../../../services/api';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {

  const productExists = yield select(
    state => state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;

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
