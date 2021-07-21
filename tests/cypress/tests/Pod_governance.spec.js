/* Copyright (c) 2020 Red Hat, Inc. */
/// <reference types="cypress" />
import { test_genericPolicyGovernance } from './common/generic_policies_governance'
import { cleanup_usingPolicyYAML } from './common/generic_policy_cleanup'

describe('RHACM4K-1724 - GRC UI: [P1][Sev1][policy-grc] Pod policy governance', () => {
    test_genericPolicyGovernance('Pod_governance/policy-config.yaml', 'Pod_governance/violations-inform.yaml', 'Pod_governance/violations-enforce.yaml')
})

describe('GRC UI: [P1][Sev1][policy-grc] Pod policy governance - clean up', () => {
    cleanup_usingPolicyYAML('Pod_governance/Pod_specification_cleanup_policy_raw.yaml')
})
