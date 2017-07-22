import xerify from './xerify'

const initialiser = async () => {
  return await xerify.productGetAll()
}

export default initialiser
