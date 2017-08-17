import { request } from '@gp-technical/stack-pack-api'

const productGetAll = async () => {
  try {
    const res = await request.get(`${process.env.XERIFY_API_URL}/item`)
    return res.Response.Items.Item
  } catch (inner) {
    const err = new Error('An xero error occurred whilst fetching all the products')
    err.inner = inner
    throw err
  }
}

const productPurchase = async (payload) => {
  try {
    const res = await request.post(`${process.env.XERIFY_API_URL}/invoice`, payload)
    return res.Response.Items.Item
  } catch (inner) {
    const err = new Error('An xero error occurred whilst creating a purchase invoice')
    err.inner = inner
    throw err
  }
}

export default {productGetAll, productPurchase}
