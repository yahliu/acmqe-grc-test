/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/* Copyright (c) 2020 Red Hat, Inc. */
const fs = require('fs')
const path = require('path')
const DISABLE_CANARY_TEST = process.env.DISABLE_CANARY_TEST == 'true' ? true : false

let page
module.exports = {
  '@disabled': DISABLE_CANARY_TEST,

  before: (browser) => {
    const loginPage = browser.page.LoginPage()
    loginPage.navigate()
    loginPage.authenticate()

    page = browser.page.CommonPage()
  },

  'GRC UI: [P1][Sev1][policy-grc] Cert policy: create issuer and certificate ': (browser) => {
    const time = browser.globals.time
    const testIssuer = fs.readFileSync(path.join(__dirname, 'yaml/cert_policy/create_test_issuer.yaml'))
    let yaml = testIssuer.toString()
    page.createPolicy(browser, 'policy-create-issuer-' + time, yaml, time)
    page.checkStatus('policy-create-issuer-' + time, false)

    const testCertificate = fs.readFileSync(path.join(__dirname, 'yaml/cert_policy/create_test_certificate.yaml'))
    yaml = testCertificate.toString()
    page.createPolicy(browser, 'policy-create-certificate-' + time, yaml, time)
    page.checkStatus('policy-create-certificate-' + time, false)
    page.deletePolicy('policy-create-certificate-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] Cert policy: create cert policy and should show violation': (browser) => {
    const time = browser.globals.time
    const certPolicy = fs.readFileSync(path.join(__dirname, 'yaml/cert_policy/create_test_certpolicy.yaml'))
    const yaml = certPolicy.toString()
    page.createPolicy(browser, 'policy-certificatepolicy-' + time, yaml, time)
    page.checkStatus('policy-certificatepolicy-' + time, true)
  },

  'GRC UI: [P1][Sev1][policy-grc] Cert policy: update certificate and secret': (browser) => {
    const time = browser.globals.time
    const updateCertificate = fs.readFileSync(path.join(__dirname, 'yaml/cert_policy/update_test_certificate.yaml'))
    const yaml = updateCertificate.toString()
    page.createPolicy(browser, 'policy-update-certificate-' + time, yaml, time)
    page.checkStatus('policy-update-certificate-' + time, false)
    page.deletePolicy('policy-update-certificate-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] Cert policy: cert policy should show compliant': (browser) => {
    const time = browser.globals.time
    page.checkStatus('policy-certificatepolicy-' + time, false)
  },

  'GRC UI: [P1][Sev1][policy-grc] Cert policy: clean up': (browser) => {
    const time = browser.globals.time
    page.deletePolicy('policy-create-issuer-' + time)
    page.deletePolicy('policy-certificatepolicy-' + time)

    const deleteAll = fs.readFileSync(path.join(__dirname, 'yaml/cert_policy/delete_test_all.yaml'))
    const yaml = deleteAll.toString()
    page.createPolicy(browser, 'policy-delete-all-' + time, yaml, time)
    page.checkStatus('policy-delete-all-' + time, false)
    page.deletePolicy('policy-delete-all-' + time)
  },
}
