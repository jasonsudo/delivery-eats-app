'use strict';

const deliveryEats = require('..');
const assert = require('assert').strict;

assert.strictEqual(deliveryEats(), 'Hello from deliveryEats');
console.info('deliveryEats tests passed');
