class AuthService {
  getLoginPage(res) {
    return res.send('<h1>Login</h1>')
  }
}

const authService = new AuthService()
module.exports = {
  authService
}