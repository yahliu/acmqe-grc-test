/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

export default {
  'data':{
     'items':{
        'apiVersion':'policy.open-cluster-management.io/v1',
        'kind':'ConfigurationPolicy',
        'metadata':{
           'creationTimestamp':'2021-04-08T23:33:17Z',
           'generation':1,
           'labels':{
              'cluster-name':'local-cluster',
              'cluster-namespace':'local-cluster',
              'policy.open-cluster-management.io/cluster-name':'local-cluster',
              'policy.open-cluster-management.io/cluster-namespace':'local-cluster'
           },
           'managedFields':[
              {
                 'apiVersion':'policy.open-cluster-management.io/v1',
                 'fieldsType':'FieldsV1',
                 'fieldsV1':{
                    'f:metadata':{
                       'f:labels':{
                          '.':{

                          },
                          'f:cluster-name':{

                          },
                          'f:cluster-namespace':{

                          },
                          'f:policy.open-cluster-management.io/cluster-name':{

                          },
                          'f:policy.open-cluster-management.io/cluster-namespace':{

                          }
                       },
                       'f:ownerReferences':{
                          '.':{

                          },
                          'k:{"uid":"cc918967-492a-4b67-91c4-16a1b19d0c33"}':{
                             '.':{

                             },
                             'f:apiVersion':{

                             },
                             'f:blockOwnerDeletion':{

                             },
                             'f:controller':{

                             },
                             'f:kind':{

                             },
                             'f:name':{

                             },
                             'f:uid':{

                             }
                          }
                       }
                    },
                    'f:spec':{
                       '.':{

                       },
                       'f:namespaceSelector':{
                          '.':{

                          },
                          'f:exclude':{

                          },
                          'f:include':{

                          }
                       },
                       'f:object-templates':{

                       },
                       'f:remediationAction':{

                       },
                       'f:severity':{

                       }
                    }
                 },
                 'manager':'governance-policy-template-sync',
                 'operation':'Update',
                 'time':'2021-04-08T23:33:17Z'
              },
              {
                 'apiVersion':'policy.open-cluster-management.io/v1',
                 'fieldsType':'FieldsV1',
                 'fieldsV1':{
                    'f:status':{
                       '.':{

                       },
                       'f:compliancyDetails':{

                       },
                       'f:compliant':{

                       },
                       'f:relatedObjects':{

                       }
                    }
                 },
                 'manager':'config-policy-controller',
                 'operation':'Update',
                 'time':'2021-04-08T23:33:32Z'
              }
           ],
           'name':'policy-pod-nginx-pod',
           'namespace':'local-cluster',
           'ownerReferences':[
              {
                 'apiVersion':'policy.open-cluster-management.io/v1',
                 'blockOwnerDeletion':true,
                 'controller':true,
                 'kind':'Policy',
                 'name':'default.policy-pod',
                 'uid':'cc918967-492a-4b67-91c4-16a1b19d0c33'
              }
           ],
           'resourceVersion':'11119715',
           'selfLink':'/apis/policy.open-cluster-management.io/v1/namespaces/local-cluster/configurationpolicies/policy-pod-nginx-pod',
           'uid':'45ca9249-6b0b-4522-bcce-271da96dc624'
        },
        'spec':{
           'namespaceSelector':{
              'exclude':[
                 'kube-*'
              ],
              'include':[
                 'default'
              ]
           },
           'object-templates':[
              {
                 'complianceType':'musthave',
                 'objectDefinition':{
                    'apiVersion':'v1',
                    'kind':'Pod',
                    'metadata':{
                       'name':'nginx-pod'
                    },
                    'spec':{
                       'containers':[
                          {
                             'image':'nginx:1.18.0',
                             'name':'nginx',
                             'ports':[
                                {
                                   'containerPort':80
                                }
                             ]
                          }
                       ]
                    }
                 }
              }
           ],
           'remediationAction':'inform',
           'severity':'low'
        },
        'status':{
           'compliancyDetails':[
              {
                 'Compliant':'NonCompliant',
                 'Validity':{

                 },
                 'conditions':[
                    {
                       'lastTransitionTime':'2021-04-08T23:33:32Z',
                       'message':'pods not found: [nginx-pod] in namespace default missing',
                       'reason':'K8s does not have a `must have` object',
                       'status':'True',
                       'type':'violation'
                    }
                 ]
              }
           ],
           'compliant':'NonCompliant',
           'relatedObjects':[
              {
                 'compliant':'NonCompliant',
                 'object':{
                    'apiVersion':'v1',
                    'kind':'pods',
                    'metadata':{
                       'name':'nginx-pod',
                       'namespace':'default'
                    }
                 },
                 'reason':'Resource not found but should exist'
              }
           ]
        }
     }
  }
}
