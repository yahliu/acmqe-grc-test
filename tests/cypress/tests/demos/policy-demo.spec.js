/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

/// <reference types="cypress" />
import { getDefaultSubstitutionRules } from '../../support/views'
import { getUniqueResourceName } from '../../scripts/utils'
import { getConfigObject } from '../../config'

describe('Testing policy named demo-policy in demo.yaml file', () => {
    const policyName = 'demo-policy'
    const uPolicyName = getUniqueResourceName(policyName)
    // demo-policy-raw.yaml is used for creating the policy "demo-policy"
    // demo-policy-raw.yaml is raw policy yaml and need be to get as raw data
    const policyYAML = getConfigObject('demos/policy-demo/demo-policy-raw.yaml', 'raw', getDefaultSubstitutionRules({policyname:uPolicyName}))
    // demo-policy-config.yaml is used for validating the policy "demo-policy"
    // demo-policy-config.yaml isn't raw policy yaml but config yaml and need be converted to a dictionary
    const { policyConfig } = getConfigObject('demos/policy-demo/demo-policy-config.yaml')

    it (`Can create new policy ${uPolicyName} from YAML editor`, () => {
      cy.FromGRCToCreatePolicyPage()
        .createPolicyFromYAML(policyYAML, true)
    })

    it(`Policy ${uPolicyName} is present in the policy listing`, () => {
      cy.verifyPolicyInListing(uPolicyName, policyConfig)
    })

    it('Policy status becomes available', () => {
      // cy.visit(`/multicloud/policies/all/${policies[name]['namespace']}/${uPolicyName}`)
      // or cy.visit('/multicloud/policies/all')
      // both pages should be supported
      cy.waitForPolicyStatus(uPolicyName)
    })

    it('Disable policy', () => {
      cy.actionPolicyActionInListing(uPolicyName, 'Disable')
    })

    it('Check disabled policy', () => {
      cy.verifyPolicyInListing(uPolicyName, policyConfig, 'disabled')
    })

    it('Enable policy', () => {
      cy.actionPolicyActionInListing(uPolicyName, 'Enable')
    })

    it('Check enabled policy', () => {
      cy.verifyPolicyInListing(uPolicyName, policyConfig, 'enabled', '0/1')
    })

    it('Enforce policy', () => {
      cy.actionPolicyActionInListing(uPolicyName, 'Enforce')
    })

    it('Check enforced policy', () => {
      policyConfig.remediation = true
      cy.verifyPolicyInListing(uPolicyName, policyConfig)
    })

    it('Inform policy', () => {
      cy.actionPolicyActionInListing(uPolicyName, 'Inform')
    })

    it('Check informed policy', () => {
      policyConfig.remediation = false
      cy.verifyPolicyInListing(uPolicyName, policyConfig)
    })

    it('check policy and the detailed policy page', () => {
       // we need to find another way how to access this page
       cy.goToPolicyDetailsPage(uPolicyName, policyConfig['namespace'])
         .verifyPolicyInPolicyDetails(uPolicyName, policyConfig, 'enabled', '0/1')
    })

    it(`Policy ${uPolicyName} can be deleted in the policy listing`, () => {
      // we could use a different way how to return to this page
      cy.visit('/multicloud/policies/all')
        .actionPolicyActionInListing(uPolicyName, 'Delete')
    })

    it(`Deleted policy ${uPolicyName} is not present in the policy listing`, () => {
      cy.verifyPolicyNotInListing(uPolicyName)
    })
})
