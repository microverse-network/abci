#!/usr/bin/env node

require('@microverse-network/core/node')
require('@microverse-network/core/plugins-standard')

const Module = require('../index')
new Module({ id: 'abci' })
