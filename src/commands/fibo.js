module.exports = {
  name: 'fibo',
  description: 'The fibonacci function. Takes one integer parameter. Example : !fibo 10',
  execute: (msg, args) => {
    _checkArgs(args)
    msg.reply(fibonacci(args._[0]))
  }
}

function fibonacci (n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return fibonacci(n - 1) + fibonacci(n - 2)
}

function _checkArgs (args) {
  const param = args._[0]

  if (!Number.isInteger(param)) {
    throw new Error(`You must provide a valid integer.`)
  }
}
