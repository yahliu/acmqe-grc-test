#!/bin/bash
# Copyright (c) 2020 Red Hat, Inc.
# Copyright Contributors to the Open Cluster Management project


# log into hub
if [ -z ${OC_CLUSTER_TOKEN} ]; then
  oc login ${OC_CLUSTER_URL} --insecure-skip-tls-verify=true -u ${OC_CLUSTER_USER} -p ${OC_CLUSTER_PASS}
else
  oc login ${OC_CLUSTER_URL} --insecure-skip-tls-verify=true --token=${OC_CLUSTER_TOKEN}
fi

# setup RBAC roles
if [ -z ${RBAC_PASS} ]; then
  echo "RBAC_PASS not set. Skipping RBAC test"
else
  source ./build/rbac-setup.sh
fi

# setup cluster for test
./build/cluster-setup.sh

#Get env from Docker arguments
export FAIL_FAST=${FAIL_FAST:-false}
acm_installed_namespace=`oc get subscriptions.operators.coreos.com --all-namespaces | grep advanced-cluster-management | awk '{print $1}'`
export CYPRESS_BASE_URL=https://`oc get route multicloud-console -n $acm_installed_namespace -o=jsonpath='{.spec.host}'`
# show all envs
printenv
# test oauth server and see if idp has been setup
i=0
while true; do
  IDP=`curl -L -k ${CYPRESS_BASE_URL} | grep ${OC_IDP}` || true
  if [ -z ${IDP// /} ]; then
    echo "wait for idp ${OC_IDP} to take effect..."
    sleep 10
  else
    echo "idp ${OC_IDP} has taken effect..."
    echo ${IDP}
    break
  fi
  i=$[i + 1]
  if [[ "$i" == '24' ]]; then
    echo "timeout waiting for idp ${OC_IDP}..."
    exit 1
  fi
done

# run test
export PAUSE=${PAUSE:-60}
echo sleep $PAUSE seconds cypress ...
sleep $PAUSE
export CI=true # force cypress to output color
# Check for fail_fast flag to stop tests on failure
if [ $FAIL_FAST == "true" ]; then
  echo "Running in fail fast mode"
  export CYPRESS_FAIL_FAST_PLUGIN=true
else
  echo "Running in non fail fast mode"
  export CYPRESS_FAIL_FAST_PLUGIN=false
fi
npm run test:cypress-headless
