import { makeProcessor } from '@gp-technical/stack-pack-api'
import xerify from './xerify'

const processor = async (action) => {
  var {types, type, data} = action
  console.info('type', type)
  switch (type) {
    case types.productPurchase:
      xerify.productPurchase(data)
      return xerify.productGetAll()
  }
}

export default makeProcessor(processor)
