/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/* Copyright (c) 2020 Red Hat, Inc. */
const nconf = require('nconf'),
      log4js = require('log4js'),
      logger = log4js.getLogger('server'),
      path = require('path')

const configDir = path.resolve(__dirname)

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.NODE_ENV = process.env.BUILD_ENV || process.env.NODE_ENV

nconf.argv().env('__')

const env = nconf.get('NODE_ENV')

logger.info(`NODE_ENV=${process.env.NODE_ENV}`)

nconf.file(env, `${configDir}/config-${env}.json`)
nconf.file('default', `${configDir}/config-defaults.json`)

module.exports = nconf
