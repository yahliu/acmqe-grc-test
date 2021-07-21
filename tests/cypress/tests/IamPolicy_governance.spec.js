/* Copyright (c) 2020 Red Hat, Inc. */
/// <reference types="cypress" />
import { test_genericPolicyGovernance } from './common/generic_policies_governance'
import { cleanup_usingPolicyYAML } from './common/generic_policy_cleanup'

describe('GRC UI: [P1][Sev1][policy-grc] IamPolicy governance - setup', () => {
  cleanup_usingPolicyYAML('IamPolicy_governance/policy-clusterrolebinding-setup_raw.yaml')
})

describe('RHACM4K-1719 - GRC UI: [P1][Sev1][policy-grc] IamPolicy governance', () => {
  test_genericPolicyGovernance('IamPolicy_governance/policy-config.yaml', 'IamPolicy_governance/violations-inform.yaml', 'IamPolicy_governance/violations-inform.yaml')
})

describe('GRC UI: [P1][Sev1][policy-grc] IamPolicy governance - cleanup', () => {
  cleanup_usingPolicyYAML('IamPolicy_governance/policy-clusterrolebinding-cleanup_raw.yaml')
})
