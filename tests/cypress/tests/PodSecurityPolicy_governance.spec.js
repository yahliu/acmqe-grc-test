/* Copyright (c) 2020 Red Hat, Inc. */
/// <reference types="cypress" />
import { test_genericPolicyGovernance } from './common/generic_policies_governance'
import { cleanup_usingPolicyYAML } from './common/generic_policy_cleanup'

describe('RHACM4K-1720 - GRC UI: [P1][Sev1][policy-grc] PodSecurityPolicy governance', () => {
  test_genericPolicyGovernance('PodSecurityPolicy_governance/policy-config.yaml', 'PodSecurityPolicy_governance/violations-inform.yaml', 'PodSecurityPolicy_governance/violations-enforce.yaml')
})

describe('GRC UI: [P1][Sev1][policy-grc] PodSecurityPolicy governance - clean up', () => {
  cleanup_usingPolicyYAML('PodSecurityPolicy_governance/PodSecurityPolicy_cleanup_policy_raw.yaml')
})
