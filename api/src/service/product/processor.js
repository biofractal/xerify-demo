import { makeProcessor } from '@gp-technical/stack-pack-api'
import xerify from './xerify'

const processor = async (action) => {
  try {
    var {types, type, data} = action
    console.info('type', type)
    switch (type) {
      case types.productPurchase:
        return xerify.productPurchase(data)
    }
  } catch (inner) {
    const err = new Error('An Product related error has occurred')
    err.inner = inner
    throw err
  }
}

export default makeProcessor(processor)
