#!/bin/bash
# Copyright (c) 2020 Red Hat, Inc.
# Copyright Contributors to the Open Cluster Management project



function hub() {
    echo "Hub: clean up"
    oc delete ns duplicatetest || true
    for ns in default e2e-rbac-test-1 e2e-rbac-test-2
        do
            oc delete policies.policy.open-cluster-management.io -n $ns --all || true
            oc delete placementbindings.policy.open-cluster-management.io  -n $ns --all || true
            oc delete placementrules.apps.open-cluster-management.io -n $ns --all || true
        done
    oc delete ns -l e2e=true || true
}

function managed() {
    echo "Managed: clean up"
    oc delete pod --all -n default || true
    oc delete issuers.cert-manager.io -l e2e=true -n default || true
    oc delete certificates.cert-manager.io -l e2e=true -n default || true
    oc delete secret -n default rsa-ca-sample-secret || true 
    oc delete clusterrolebinding -l e2e=true || true
    oc delete subscriptions.operators.coreos.com container-security-operator -n openshift-operators || true
    oc delete csv -n openshift-operators `oc get -n openshift-operators csv -o jsonpath='{.items[?(@.spec.displayName=="Quay Container Security")].metadata.name}'` || true
    oc delete crd imagemanifestvulns.secscan.quay.redhat.com || true
    oc delete operatorgroup awx-resource-operator-operatorgroup -n default || true
    oc delete subscriptions.operators.coreos.com awx-resource-operator -n default || true
    oc delete csv awx-resource-operator.v0.1.1 -n default || true
    oc delete secret grcui-e2e-credential -n default || true
    oc delete LimitRange container-mem-limit-range -n default || true
    oc delete ns prod || true
    oc delete psp restricted-psp || true
    oc delete role deployments-role -n default || true
    oc delete rolebinding operatoruser-rolebinding -n default || true
    oc delete scc restricted-scc || true
    oc delete ns -l e2e=true || true
}

case $1 in
    hub)
        hub
        ;;
    managed)
        managed
        ;;
    *)
        hub
        managed
        ;;
esac
