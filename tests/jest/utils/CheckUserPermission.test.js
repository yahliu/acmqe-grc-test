/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import {
  checkCreatePermission,
  checkEditPermission,
  checkCreateRole,
  checkEditRole
} from '../../../src-web/utils/CheckUserPermission'

const accessUsers = {
  clusterAdmin: [{
    namespace: 'default',
    rules: {
      '*/*': ['*']
    }
  }],
  admin: [{
    namespace: 'default',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
        'create',
      ]
    }
  }],
  edit: [{
    namespace: 'default',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
      ]
    }
  }],
  view: [{
    namespace: 'default',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
      ]
    }
  }]
}

const extraPolicyKeys = [ 'policy.open-cluster-management.io/policyautomations' ]

const mixedUsers = {
  mixedNsAdminEdit: [{
    namespace: 'namespace-1',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
        'create',
      ]
    }
  },{
    namespace: 'namespace-2',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
      ]
    }
  }],
  mixedKindAdminEdit: [{
    namespace: 'namespace-1',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
        'create',
      ],
      'policy.open-cluster-management.io/policyautomations': [
        'get',
        'list',
        'watch',
        'update',
      ]
    }
  }],
  mixedNsEditView: [{
    namespace: 'namespace-1',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
      ]
    }
  },{
    namespace: 'namespace-2',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
      ]
    }
  }],
  mixedKindEditView: [{
    namespace: 'namespace-1',
    rules: {
      'policy.open-cluster-management.io/policies': [
        'get',
        'list',
        'watch',
        'update',
      ],
      'policy.open-cluster-management.io/policyautomations': [
        'get',
        'list',
        'watch',
      ]
    }
  }],
}

describe('checkCreatePermission', () => {
  for (const user in accessUsers) {
    it(`should return correct permissions for ${user} users`, () => {
      expect(checkCreatePermission(accessUsers[user])).toMatchSnapshot()
    })
  }
  it('should return 1 for a user with admin and edit in diff ns', () => {
    expect(checkCreatePermission(mixedUsers.mixedNsAdminEdit)).toMatchSnapshot()
  })
  it('should return 0 for a user with edit and view in diff ns', () => {
    expect(checkCreatePermission(mixedUsers.mixedNsEditView)).toMatchSnapshot()
  })
})

describe('checkCreateRole', () => {
  for (const user in accessUsers) {
    it(`should return correct permissions for ${user} users`, () => {
      expect(checkCreateRole(accessUsers[user][0].rules)).toMatchSnapshot()
    })
  }
  it('should return 0 for a user with admin and edit in diff kinds', () => {
    expect(checkCreateRole(mixedUsers.mixedKindAdminEdit[0].rules, extraPolicyKeys)).toMatchSnapshot()
  })
  it('should return 0 for a user with edit and view in diff kinds', () => {
    expect(checkCreateRole(mixedUsers.mixedKindEditView[0].rules, extraPolicyKeys)).toMatchSnapshot()
  })
})

describe('checkEditPermission', () => {
  for (const user in accessUsers) {
    it(`should return correct permissions for ${user} users`, () => {
      expect(checkEditPermission(accessUsers[user])).toMatchSnapshot()
    })
  }
  it('should return 1 for a user with admin and edit in diff ns', () => {
    expect(checkEditPermission(mixedUsers.mixedNsAdminEdit)).toMatchSnapshot()
  })
  it('should return 1 for a user with edit and view in diff ns', () => {
    expect(checkEditPermission(mixedUsers.mixedNsEditView)).toMatchSnapshot()
  })
})

describe('checkEditRole', () => {
  for (const user in accessUsers) {
    it(`should return correct permissions for ${user} users`, () => {
      expect(checkEditRole(accessUsers[user][0].rules)).toMatchSnapshot()
    })
  }
  it('should return 1 for a user with admin and edit in diff kinds', () => {
    expect(checkEditRole(mixedUsers.mixedKindAdminEdit[0].rules, extraPolicyKeys)).toMatchSnapshot()
  })
  it('should return 0 for a user with edit and view in diff kinds', () => {
    expect(checkEditRole(mixedUsers.mixedKindEditView[0].rules, extraPolicyKeys)).toMatchSnapshot()
  })
})
