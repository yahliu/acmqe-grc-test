/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

export default {
  'data':{
     'items':[
        {
           'templateName':'policy-pod-nginx-pod',
           'cluster':'local-cluster',
           'clusterNamespace':'local-cluster',
           'status':'NonCompliant',
           'apiVersion':'policy.open-cluster-management.io/v1',
           'kind':'ConfigurationPolicy',
           'message':'NonCompliant; violation - pods not found: [nginx-pod] in namespace default missing',
           'timestamp':'2021-04-08T23:33:32Z',
           'consoleURL':'https://console-openshift-console.apps.policy-grc-cp-dev-bg4c8.dev08.red-chesterfield.com',
           'policyName':'policy-pod',
           'policyNamespace':'default',
           '__typename':'Status'
        }
     ]
  }
}
