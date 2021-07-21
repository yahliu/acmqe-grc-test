/* Copyright (c) 2020 Red Hat, Inc. */
/// <reference types="cypress" />
import { test_genericPolicyGovernance } from './common/generic_policies_governance'
import { cleanup_usingPolicyYAML } from './common/generic_policy_cleanup'

describe('RHACM4K-1723 - GRC UI: [P1][Sev1][policy-grc] SecurityContextConstraintsPolicy governance', () => {
  test_genericPolicyGovernance('SCC_policy_governance/policy-config.yaml', 'SCC_policy_governance/violations-inform.yaml', 'SCC_policy_governance/violations-enforce.yaml')
})

describe('GRC UI: [P1][Sev1][policy-grc] SecurityContextConstraintsPolicy governance - clean up', () => {
  cleanup_usingPolicyYAML('SCC_policy_governance/SCC_cleanup_policy_raw.yaml')
})
