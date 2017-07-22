import { request } from '@gp-technical/stack-redux-api'

const productGetAll = async () => {
  const res = await request.get(`${process.env.XERIFY_API_URL}/item`)
  return res.Response.Items.Item
}

const productPurchase = async ({itemId}) => {
  console.info('itemId', itemId)
}

export default {productGetAll, productPurchase}
