const Base = require('@microverse-network/core/base')

const createABCIServer = require('abci')

const ABCI_METHODS = [
  'echo',
  'flush',
  'info',
  'setOption',
  'initChain',
  'query',
  'beginBlock',
  'checkTx',
  'deliverTx',
  'endBlock',
  'commit',
]

module.exports = class ABCI extends Base {
  constructor(options = {}) {
    super(options)
    options.port = options.port || 26658
    this.server = createABCIServer(this.handlers)
    this.server.listen(options.port)
  }

  get handlers() {
    return ABCI_METHODS.filter(name => this[name]).reduce((handlers, name) => {
      handlers[name] = (...args) => this[name](...args)
      return handlers
    }, {})
  }
}
