const test = require('tape')
const getTime = require('./index.js')

test('getTime test', t => {
  const now = getTime()

  t.plan(2)

  t.equal(typeof getTime, 'function')
  t.equal(typeof now, 'number')
})
