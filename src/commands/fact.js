module.exports = {
  name: 'fact',
  execute: (msg, args) => {
    msg.reply(factorial(args[0]))
  },
}
  
function factorial (n) {
    if (n === 0) return 1
  
    return n * factorial(n - 1)
}
