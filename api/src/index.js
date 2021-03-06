import { sharedServices, rest, socket } from '@gp-technical/stack-pack-api'
import localServices from './service'
import express from './express'
import winston from 'winston'
import Logger from 'le_node' // eslint-disable-line no-unused-vars
import util from 'util'

const services = {...sharedServices, ...localServices}

winston.add(winston.transports.Logentries, { token: process.env.API_LOGENTRIES_TOKEN })
winston.info('---------------------------')

;(async () => {
  try {
    // Starts an HTTPS express server
    const {tls, app} = await express.start(services)

    // Discovers and mounts any endpoints found in service/router.js files
    // Note the baseUrl prefix. This is an optional namespace for all the
    // rest endpoints provided by the individual services.
    rest.setRoutes({
      app,
    services})

    // Connects the socket to receive and broadcast REDUX actions to and from the app
    socket.connect({
      services,
    tls})
  } catch (inner) {
    const err = new Error(`An error occurred whilst starting the ${process.env.API_NAME} API`)
    err.inner = inner
    winston.error(util.inspect(err))
  }
})()
