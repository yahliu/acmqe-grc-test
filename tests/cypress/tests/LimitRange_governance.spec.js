/* Copyright (c) 2020 Red Hat, Inc. */
/// <reference types="cypress" />
import { test_genericPolicyGovernance } from './common/generic_policies_governance'
import { cleanup_usingPolicyYAML } from './common/generic_policy_cleanup'

describe('GRC UI: [P1][Sev1][policy-grc] LimitRange policy governance - setup', () => {
    cleanup_usingPolicyYAML('LimitRange_governance/LimitRange_specification_setup_policy_raw.yaml')
})

describe('RHACM4K-1726 - GRC UI: [P1][Sev1][policy-grc] LimitRange policy governance', () => {
    test_genericPolicyGovernance('LimitRange_governance/policy-config.yaml', 'LimitRange_governance/violations-inform.yaml', 'LimitRange_governance/violations-enforce.yaml')
})
//setup & clean up yaml files are identical
describe('GRC UI: [P1][Sev1][policy-grc] LimitRange policy governance - clean up', () => {
    cleanup_usingPolicyYAML('LimitRange_governance/LimitRange_specification_setup_policy_raw.yaml')
})
