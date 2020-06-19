import api from '../../../services/api';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  console.log(response.data);

  yield put(addToCartSuccess(response.data));

}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);

// Basicamente um passo a mais entre a action e o reducer
// yield basicamente é o AWAIT && o * basicamente é o ASYNC
// Sagas também consegue disparar actions
// PUT basicamente dispara uma action do redux
// takeLatest Basicamente e controle de cliques do usuario pegando somente o ultimo clique como valido

