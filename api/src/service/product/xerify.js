import { request } from '@gp-technical/stack-pack-api'

const productGetAll = async () => {
  const res = await request.get(`${process.env.XERIFY_API_URL}/item`)
  return res.Response.Items.Item
}

const productPurchase = async (payload) => {
  const res = await request.post(`${process.env.XERIFY_API_URL}/invoice`, payload)
  return res.Response.Items.Item
}

export default {productGetAll, productPurchase}
