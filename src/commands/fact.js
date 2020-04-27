module.exports = {
  name: 'fact',
  description: 'The factorial function. Takes one integer parameter. Example : !fact 10',
  execute: (msg, args) => {
    _checkArgs(args)
    msg.reply(factorial(args._[0]))
  },
}
  
function factorial (n) {
    if (n === 0) return 1
  
    return n * factorial(n - 1)
}

function _checkArgs (args) {
  const param = args._[0]

  if (!Number.isInteger(param)) {
    throw new Error(`You must provide a valid integer.`)
  }
}