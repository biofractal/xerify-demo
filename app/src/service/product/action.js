import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'

const types = makeTypes(name, ['purchase'])
const actions = makeActions(types)

export { actions, types }