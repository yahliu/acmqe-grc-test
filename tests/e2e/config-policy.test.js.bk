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

let page

module.exports = {
  '@disabled': false,

  before: (browser) => {
    const loginPage = browser.page.LoginPage()
    loginPage.navigate()
    loginPage.authenticate()

    page = browser.page.CommonPage()
  },
  'GRC UI: [P1][Sev1][policy-grc] Config policy: single object check (musthave+inform) and then enforce it using UI': (browser) => {
    const time = browser.globals.time
    const singleMustHaveInform = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/single_musthave_inform.yaml'))
    const yaml = singleMustHaveInform.toString()
    page.createPolicy(browser, 'policy-pod-single-musthave-inform-' + time, yaml, time)
    page.checkStatus('policy-pod-single-musthave-inform-' + time, true, 'NonCompliant; violation - pods not found: [nginx-pod-' + time + '] in namespace default missing View details')
    page.enforcePolicy('policy-pod-single-musthave-inform-' + time)
    page.checkStatus('policy-pod-single-musthave-inform-' + time, false)
    page.deletePolicy('policy-pod-single-musthave-inform-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] Config policy: single object check (mustnothave+enforce) and then inform it using UI': (browser) => {
    const time = browser.globals.time
    const singleMustHaveInform = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/single_mustnothave_enforce.yaml'))
    const yaml = singleMustHaveInform.toString()
    page.createPolicy(browser, 'policy-pod-single-mustnothave-enforce-' + time, yaml, time)
    page.checkStatus('policy-pod-single-mustnothave-enforce-' + time, false)
    page.informPolicy('policy-pod-single-mustnothave-enforce-' + time)
    page.checkStatus('policy-pod-single-mustnothave-enforce-' + time, false)
    page.deletePolicy('policy-pod-single-mustnothave-enforce-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] Config policy: all objects of kind / exists': (browser) => {
    const time = browser.globals.time
    const kindMustNotHaveNC = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/kind_mustnothave_noncompliant.yaml'))
    let yaml = kindMustNotHaveNC.toString()
    page.createPolicy(browser, 'policy-ns-mustnothave-' + time, yaml, time)
    page.checkStatus('policy-ns-mustnothave-' + time, true)
    page.deletePolicy('policy-ns-mustnothave-' + time)
    const kindMustHave = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/kind_musthave_compliant.yaml'))
    yaml = kindMustHave.toString()
    page.createPolicy(browser, 'policy-ns-musthave-' + time, yaml, time)
    page.checkStatus('policy-ns-musthave-' + time, false)
    page.deletePolicy('policy-ns-musthave-' + time)
  },

  'GRC UI: [P1][Sev1][policy-grc] Config policy: all objects of kind / does not exist': (browser) => {
    const time = browser.globals.time
    const createNS = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/create_test_ns.yaml'))
    let yaml = createNS.toString()
    page.createPolicy(browser, 'policy-namespace-create-' + time, yaml, time)
    page.checkStatus('policy-namespace-create-' + time, false)
    page.deletePolicy('policy-namespace-create-' + time)
    //do checks
    const kindMustHave = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/kind_musthave_noncompliant.yaml'))
    yaml = kindMustHave.toString()
    page.createPolicy(browser, 'policy-pod-musthave-all-' + time, yaml, time)
    page.checkStatus('policy-pod-musthave-all-' + time, true, 'NonCompliant; violation - No instances of `pods` found as specified View details')
    page.deletePolicy('policy-pod-musthave-all-' + time)
    const kindMustNotHave = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/kind_mustnothave_compliant.yaml'))
    yaml = kindMustNotHave.toString()
    page.createPolicy(browser, 'policy-pod-mustnothave-all-' + time, yaml, time)
    page.checkStatus('policy-pod-mustnothave-all-' + time, false)
    page.deletePolicy('policy-pod-mustnothave-all-' + time)
    //delete ns
    const deleteNS = fs.readFileSync(path.join(__dirname, 'yaml/config_policy/delete_test_ns.yaml'))
    yaml = deleteNS.toString()
    page.createPolicy(browser, 'policy-namespace-delete-' + time, yaml, time)
    page.checkStatus('policy-namespace-delete-' + time, false)
    page.deletePolicy('policy-namespace-delete-' + time)
  },
}
