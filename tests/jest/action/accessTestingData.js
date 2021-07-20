/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

export const accessItem = [
  {
    'namespace': 'default',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'e2e-rbac-test-1',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'e2e-rbac-test-2',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'hive',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'kube-node-lease',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'kube-public',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'kube-system',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'local-cluster',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'open-cluster-management',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'open-cluster-management-agent',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'open-cluster-management-agent-addon',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'open-cluster-management-hub',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-apiserver',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-apiserver-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-authentication',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-authentication-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cloud-credential-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cluster-csi-drivers',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cluster-machine-approver',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cluster-node-tuning-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cluster-samples-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cluster-storage-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-cluster-version',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-compliance',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-config',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-config-managed',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-config-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-console',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-console-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-console-user-settings',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-controller-manager',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-controller-manager-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-dns',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-dns-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-etcd',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-etcd-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-image-registry',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-infra',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-ingress',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-ingress-canary',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-ingress-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-insights',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kni-infra',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-apiserver',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-apiserver-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-controller-manager',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-controller-manager-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-scheduler',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-scheduler-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-storage-version-migrator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kube-storage-version-migrator-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-kubevirt-infra',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-machine-api',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-machine-config-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-marketplace',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-monitoring',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-multus',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-network-diagnostics',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-network-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-node',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-oauth-apiserver',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-openstack-infra',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-operator-lifecycle-manager',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-operators',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-ovirt-infra',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-ovn-kubernetes',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-service-ca',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-service-ca-operator',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-user-workload-monitoring',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  },
  {
    'namespace': 'openshift-vsphere-infra',
    'rules': {
      '*/*': [
        '*'
      ]
    }
  }
]
