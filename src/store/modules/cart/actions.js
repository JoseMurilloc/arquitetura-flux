// Ação que vai ser disparada quando clicamos em ADICIONAR AO CARRIHO
// Request so é ouvida pelo nosso sagas
export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  }
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  }
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UDPATE_AMOUNT',
    id,
    amount,
  }
}
