const authService = {
  getLoginPage(res) {
    return res.send('<h1>Login</h1>')
  }
}

module.exports = {
  authService
}