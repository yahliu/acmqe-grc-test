/* Copyright (c) 2020 Red Hat, Inc. */
/// <reference types="cypress" />
import { test_genericPolicyGovernance } from './common/generic_policies_governance'
import { cleanup_usingPolicyYAML } from './common/generic_policy_cleanup'

describe('RHACM4K-1721 - GRC UI: [P1][Sev1][policy-grc] RolePolicy governance', () => {
  test_genericPolicyGovernance('Role_policy_governance/policy-config.yaml', 'Role_policy_governance/violations-inform.yaml', 'Role_policy_governance/violations-enforce.yaml')
})

describe('GRC UI: [P1][Sev1][policy-grc] RolePolicy governance - clean up', () => {
  cleanup_usingPolicyYAML('Role_policy_governance/role_specification_cleanup_policy_raw.yaml')
})
