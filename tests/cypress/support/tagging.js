/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

// evaluates tags against filters stored in environment variables
// CYPRESS_TAGS_INCLUDE (evaluated first)
// CYPRESS_TAGS_EXCLUDE (excluding from the set build previously)
// filter is a regular expression for alphabetically sorted string of space separated tags
const evaluateFilter = (tags) => {
  let passed = true
  const includeRegExp = Cypress.env('TAGS_INCLUDE')
  console.log(`evaluating tags: ${tags}`)
  console.log(`include regexp: ${includeRegExp}`)
  const excludeRegExp = Cypress.env('TAGS_EXCLUDE')
  console.log(`exclude regexp: ${excludeRegExp}`)
  // first include tags
  if (includeRegExp) {
    const regexp = new RegExp(includeRegExp)
    passed = regexp.test(tags)
  }
  if (passed && excludeRegExp) {
    const regexp = new RegExp(excludeRegExp)
    passed = ! regexp.test(tags)
  }
  console.log(`Test tag match evaluation result: ${passed}`)
  return passed
}

// decide whether a specific test function should be executed or not
// tags have format '@name', stored as a space separated string, prefix of a test title
const filterTestFuntionCall = (testFunction, title, callback) => {
  const tags = title.match(/(@[a-z0-9_]+ *)*/)[0]
  const inheritedTags = window.cypressTestTags ? window.cypressTestTags : ''
  console.log(`Parsed test tags: ${tags}`)
  console.log(`Inherited test tags: ${inheritedTags}`)
  const allTagsSet = new Set(`${tags} ${inheritedTags}`.split(' '))  // eliminate duplicates
  const allTagsArray = Array.from(allTagsSet)  // convert back to array
  allTagsArray.sort()  // sort it
  const allTags = allTagsArray.join(' ')  // convert back to string
  // evaluate if test match required tag filter
  if (evaluateFilter(allTags)) {
    window.cypressTestTags = allTags  // propagate new set of tags
    testFunction(title, callback)  // run the wrapped test function
    window.cypressTestTags = inheritedTags  // restore old set of tags
  } else {  // do nothing
    console.log(`Test was skipped: ${title}`)
  }
}

// wrapper for describe() supporting tags in title
// e.g. describeT('@fast @stable Login to RHACM as user kubeadmin', () => { ...
export const describeT = (title, callback) => {
  filterTestFuntionCall(describe, title, callback)
}

// wrapper for it() supporting tags in title
export const itT = (title, callback) => {
  filterTestFuntionCall(it, title, callback)
}
