const reducer = (state = [], action) => {
  const {type, types, data} = action
  console.info('type', type)
  console.info('state', state)
  console.info('data', data)

  switch (type) {
    case types.product_init:
    case types.productGetAll:
    case types.productPurchaseResponse:
      return data
    default:
      return state
  }
}

export default reducer
