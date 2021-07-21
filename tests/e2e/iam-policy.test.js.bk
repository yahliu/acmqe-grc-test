/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/* Copyright (c) 2020 Red Hat, Inc. */

var fs = require('fs')
const path = require('path')

let page

module.exports = {
  '@disabled': false,

  before: (browser) => {
    const loginPage = browser.page.LoginPage()
    loginPage.navigate()
    loginPage.authenticate()

    page = browser.page.CommonPage()
  },

  'GRC UI: [P1][Sev1][policy-grc] IAM policy: create iam-policy': (browser) => {
    const time = browser.globals.time
    const createIamPolicy = fs.readFileSync(path.join(__dirname, 'yaml/iam_policy/create_test_iam_policy.yaml'))
    var yaml = createIamPolicy.toString()
    page.createPolicy(browser, 'policy-iampolicy-' + time, yaml, time)
    page.checkStatus('policy-iampolicy-' + time, false)
  },

  'GRC UI: [P1][Sev1][policy-grc] IAM policy: create clusterrolebinding as should show violation': (browser) => {
    const time = browser.globals.time
    const createCRB = fs.readFileSync(path.join(__dirname, 'yaml/iam_policy/create_test_clusterrolebinding.yaml'))
    var yaml = createCRB.toString()
    page.createPolicy(browser, 'policy-clusterrolebinding-test-' + time, yaml, time)
    page.checkStatus('policy-clusterrolebinding-test-' + time, false)
    page.checkStatus('policy-iampolicy-' + time, true)
    page.deletePolicy('policy-clusterrolebinding-test-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] IAM policy: delete clusterrolebinding as should show compliant': (browser) => {
    const time = browser.globals.time
    const deleteCRB = fs.readFileSync(path.join(__dirname, 'yaml/iam_policy/delete_test_clusterrolebinding.yaml'))
    var yaml = deleteCRB.toString()
    page.createPolicy(browser, 'policy-clusterrolebinding-delete-' + time, yaml, time)
    page.checkStatus('policy-clusterrolebinding-delete-' + time, false)
    page.checkStatus('policy-iampolicy-' + time, false)
    page.deletePolicy('policy-clusterrolebinding-delete-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] IAM policy: clean up': (browser) => {
    const time = browser.globals.time
    page.deletePolicy('policy-iampolicy-' + time)
  },
}
