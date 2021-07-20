/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import { renderAnsibleHistory } from '../../../../../src-web/components/modals/AnsibleAutomationModal/AnsibleHistory'

const mockAnsibleJobListResponse1 = {
  apiVersion: 'tower.ansible.com/v1alpha1',
  items: [],
  kind: 'AnsibleJobList',
  metadata: {
    continue: '',
    resourceVersion: '376760',
    selfLink: '/apis/tower.ansible.com/v1alpha1/namespaces/default/ansiblejobs',
  },
}

const mockAnsibleJobListResponse2 = {
  apiVersion: 'tower.ansible.com/v1alpha1',
  items: [
    {
      apiVersion: 'tower.ansible.com/v1alpha1',
      kind: 'AnsibleJob',
      metadata: {
        creationTimestamp: '2021-05-03T17:18:10Z',
        generateName: 'create-service-now-ticket-once-',
        generation: 1,
        labels: {
          tower_job_id: '20',
        },
        name: 'create-service-now-ticket-once-g6xsr',
        namespace: 'default',
        ownerReferences: [
          {
            apiVersion: 'policy.open-cluster-management.io/v1beta1',
            blockOwnerDeletion: true,
            controller: true,
            kind: 'PolicyAutomation',
            name: 'create-service-now-ticket',
            uid: '',
          },
        ],
        resourceVersion: '358239',
        selfLink: '/apis/tower.ansible.com/v1alpha1/namespaces/default/ansiblejobs/create-service-now-ticket-once-g6xsr',
        uid: '',
      },
      spec: {
        extra_vars: {
          sn_priority: 1,
          sn_severity: 1,
          target_clusters: [
            'local-cluster',
          ],
        },
        job_template_name: 'Demo Job Template',
      },
      status: {
        ansibleJobResult: {
          changed: true,
          elapsed: '6.384',
          failed: false,
          finished: '2021-05-03T17:18:43.332157Z',
          started: '2021-05-03T17:18:36.948508Z',
          status: 'successful',
          url: 'https://ansible-tower-web-svc-tower.apps.policy-grc-cp-dev-z4bg2.dev08.red-chesterfield.com/#/jobs/playbook/20',
        },
        conditions: [
          {
            ansibleResult: {
              changed: 0,
              completion: '2021-05-03T17:18:55.54961',
              failures: 0,
              ok: 3,
              skipped: 0,
            },
            lastTransitionTime: '2021-05-03T17:18:10Z',
            message: 'Awaiting next reconciliation',
            reason: 'Successful',
            status: 'True',
            type: 'Running',
          },
        ],
        k8sJob: {
          created: true,
          env: {
            templateName: 'Demo Job Template',
            verifySSL: false,
          },
          message: 'Monitor the job.batch status for more details with the following commands:\n\'kubectl -n default get job.batch/create-service-now-ticket-once-g6xsr\'\n\'kubectl -n default describe job.batch/create-service-now-ticket-once-g6xsr\'\n\'kubectl -n default logs -f job.batch/create-service-now-ticket-once-g6xsr\'',
          namespacedName: 'default/create-service-now-ticket-once-g6xsr',
        },
        message: 'This job instance is already running or has reached its end state.',
      },
    },
    {
      apiVersion: 'tower.ansible.com/v1alpha1',
      kind: 'AnsibleJob',
      metadata: {
        creationTimestamp: '2021-05-03T17:31:32Z',
        generateName: 'policy-role-once-',
        generation: 1,
        labels: {
          tower_job_id: '22',
        },
        name: 'policy-role-once-7fg9p',
        namespace: 'default',
        ownerReferences: [
          {
            apiVersion: 'policy.open-cluster-management.io/v1beta1',
            blockOwnerDeletion: true,
            controller: true,
            kind: 'PolicyAutomation',
            name: 'policy-role',
            uid: null,
          },
        ],
        resourceVersion: '371219',
        selfLink: '/apis/tower.ansible.com/v1alpha1/namespaces/default/ansiblejobs/policy-role-once-7fg9p',
        uid: null,
      },
      spec: {
        extra_vars: {
          sn_priority: 1,
          sn_severity: 1,
          target_clusters: [
            'local-cluster',
          ],
        },
        job_template_name: 'Demo Job Template',
      },
      status: {
        ansibleJobResult: {
          changed: true,
          elapsed: '6.578',
          failed: false,
          finished: '2021-05-03T17:32:06.357295Z',
          started: '2021-05-03T17:31:59.779211Z',
          status: 'successful',
          url: 'https://ansible-tower-web-svc-tower.apps.policy-grc-cp-dev-z4bg2.dev08.red-chesterfield.com/#/jobs/playbook/22',
        },
        conditions: [
          {
            ansibleResult: {
              changed: 0,
              completion: '2021-05-03T17:32:18.620627',
              failures: 0,
              ok: 3,
              skipped: 0,
            },
            lastTransitionTime: '2021-05-03T17:31:32Z',
            message: 'Awaiting next reconciliation',
            reason: 'Successful',
            status: 'True',
            type: 'Running',
          },
        ],
        k8sJob: {
          created: true,
          env: {
            templateName: 'Demo Job Template',
            verifySSL: false,
          },
          message: 'Monitor the job.batch status for more details with the following commands:\n\'kubectl -n default get job.batch/policy-role-once-7fg9p\'\n\'kubectl -n default describe job.batch/policy-role-once-7fg9p\'\n\'kubectl -n default logs -f job.batch/policy-role-once-7fg9p\'',
          namespacedName: 'default/policy-role-once-7fg9p',
        },
        message: 'This job instance is already running or has reached its end state.',
      },
    },
    {
      apiVersion: 'tower.ansible.com/v1alpha1',
      kind: 'AnsibleJob',
      metadata: {
        creationTimestamp: '2021-05-03T17:31:32Z',
        generateName: 'policy-role-once-',
        generation: 1,
        labels: {
          tower_job_id: '22',
        },
        name: 'policy-role-once-7fg9p',
        namespace: 'default',
        ownerReferences: [
          {
            apiVersion: 'policy.open-cluster-management.io/v1beta1',
            blockOwnerDeletion: true,
            controller: true,
            kind: 'PolicyAutomation',
            name: 'policy-role',
            uid: 'bddcd0d3-341e-4480-b2ed-e62a428f4ee5',
          },
        ],
        resourceVersion: '371219',
        selfLink: '/apis/tower.ansible.com/v1alpha1/namespaces/default/ansiblejobs/policy-role-once-7fg9p',
        uid: 'c61d3d3c-a8b8-48ed-9afb-b94ab0cc447b',
      },
      spec: {
        extra_vars: {
          sn_priority: 1,
          sn_severity: 1,
          target_clusters: [
            'local-cluster',
          ],
        },
        job_template_name: 'Demo Job Template',
      },
      status: {
        conditions: [
          {
            ansibleResult: {
              changed: 0,
              completion: '2021-05-03T17:32:18.620627',
              failures: 0,
              ok: 3,
              skipped: 0,
            },
            lastTransitionTime: '2021-05-03T17:31:32Z',
            message: 'Tower Secret must exists',
            reason: 'Failed',
            status: 'True',
            type: 'Failure',
          },
        ],
      },
    },
  ],
  kind: 'AnsibleJobList',
  metadata: {
    continue: '',
    resourceVersion: '376760',
    selfLink: '/apis/tower.ansible.com/v1alpha1/namespaces/default/ansiblejobs',
  },
}

describe('render AnsibleHistory component', () => {
  it('render empty AnsibleHistory page', () => {
    const component = renderAnsibleHistory(mockAnsibleJobListResponse1, 'us')
    expect(component).toMatchSnapshot()
  })

  it('render AnsibleHistory page', () => {
    const component = renderAnsibleHistory(mockAnsibleJobListResponse2, 'us')
    expect(component).toMatchSnapshot()
  })
})
