/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

import './commands'
require('cypress-terminal-report/src/installLogsCollector')()

import '@cypress/code-coverage/support'
import 'cypress-fail-fast'

Cypress.Cookies.defaults({
  preserve: ['acm-access-token-cookie', '_oauth_proxy', 'XSRF-TOKEN', '_csrf']
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

before(() => {
  cy.login()
})

// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
