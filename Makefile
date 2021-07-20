# Copyright (c) 2021 Red Hat, Inc

# Bootstrap (pull) the build harness

# GITHUB_USER containing '@' char must be escaped with '%40'
GITHUB_USER := $(shell echo $(GITHUB_USER) | sed 's/@/%40/g')
GITHUB_TOKEN ?=

include build/Configfile

USE_VENDORIZED_BUILD_HARNESS ?=

ifndef USE_VENDORIZED_BUILD_HARNESS
-include $(shell curl -s -H 'Accept: application/vnd.github.v4.raw' -L https://api.github.com/repos/open-cluster-management/build-harness-extensions/contents/templates/Makefile.build-harness-bootstrap -o .build-harness-bootstrap; echo .build-harness-bootstrap)
else
-include vbh/.build-harness-bootstrap
endif

default::
	@echo "Build Harness Bootstrapped"

install:
	CYPRESS_INSTALL_BINARY=0 npm ci --unsafe-perm


lint:
	npm run lint

prune:
	npm prune --production

DOCKER_NAMESPACE := open-cluster-management
DOCKER_REGISTRY := quay.io
TEST_IMAGE_TAG ?= $(COMPONENT_VERSION)$(COMPONENT_TAG_EXTENSION)
COMPONENT_DOCKER_REPO := 
COMPONENT_NAME := 


build-test-image:
	docker build . \
	-t $(COMPONENT_DOCKER_REPO)/$(COMPONENT_NAME):$(TEST_IMAGE_TAG)

push-test-image:
	make component/push

publish-test-image:
	rm -rf pipeline
	make pipeline-manifest/update COMPONENT_NAME=$(COMPONENT_NAME) PIPELINE_MANIFEST_COMPONENT_SHA256=${TRAVIS_COMMIT} PIPELINE_MANIFEST_COMPONENT_REPO=${TRAVIS_REPO_SLUG} PIPELINE_MANIFEST_BRANCH=${TRAVIS_BRANCH}
